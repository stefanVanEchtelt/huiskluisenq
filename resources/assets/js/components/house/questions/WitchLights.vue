<template>
    <div class="panel panel-default" v-if="room">
        <div class="panel-heading">Vraag 2</div>
        <div class="panel-body" style="font-size: 30px;">
            Welke verlichting bevint zich in de {{ room.name ? room.name : '' }} op de {{ storey }}e verdieping?
            <table class="table" style="width: 100%">
                <thead>
                <tr>
                    <th>Naam</th>
                    <th>Amount</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="light in lights">
                    <td>
                        <input class="form-control" v-model="light.name" @change="updateLight(light)">
                    </td>
                    <td>
                        <input class="form-control" type="number" v-model="light.amount" @change="updateLight(light)">
                    </td>
                    <td>
                        Watt
                    </td>
                </tr>
                </tbody>
            </table>

            <a class="btn btn-primary pull-right" @click="addLight">Verlichting toevoegen</a>
        </div>
        <div class="panel-footer">
            <div class="row">
                <div class="col-lg-12">
                    <a @click="lastPage" class="btn btn-danger">Vorige</a>
                    <a @click="nextPage" class="btn btn-primary pull-right">Volgende</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import router from '../../../router'

    export default {
        data() {
            return {
                houseId: parseInt(router.currentRoute.params.houseId),
                roomId: parseInt(router.currentRoute.params.roomId)
            }
        },
        watch:{
            '$route' (to, from){
                this.houseId = parseInt(to.params.houseId);
                this.roomId = parseInt(to.params.roomId);
                this.loadPage();
            }
        },
        computed: {
            houseFloors() {
                return this.$store.getters.getFloorsByHouse(this.houseId);
            },
            storey() {
                return this.houseFloors.indexOf(this.floor) + 1;
            },
            allRooms() {
                return this.$store.getters.getRoomsByHouse(this.houseId);
            },
            room() {
                return this.$store.getters.getRoom(this.roomId);
            },
            floor() {
                if (this.room) {
                    return this.$store.getters.findFloor(this.room.floor_id);
                }
            },
            lights() {
                return this.$store.getters.getLightsByRoom(this.roomId);
            }
        },
        methods: {
            loadPage() {
                this.$store.dispatch('loadAllRoomsByHouse', this.houseId);
                this.$store.dispatch('loadLightsByRoom', this.roomId);
                this.$store.dispatch('loadRoom', this.roomId);
            },
            addLight() {
                this.$store.commit('addEmptyLight', this.roomId);
            },
            updateLight(light) {
                this.$store.commit('updateLight', light);
            },
            nextPage() {
                let index = this.allRooms.indexOf(this.room);
                if (this.allRooms[index + 1]) {
                    router.push('/house/' + this.houseId + '/lights/' + this.allRooms[index + 1].id);
                } else {
                    // TODO load next page (radiators)
                    console.log(' --- xxx --- ');
                    console.log(' load another Page');
                }
            },
            lastPage() {
                let index = this.allRooms.indexOf(this.room);
                if (index <= 0) {
                    router.push('/house/' + this.houseId + '/devices/' + this.allRooms[this.allRooms.length - 1].id);
                } else {
                    router.push('/house/' + this.houseId + '/lights/' + this.allRooms[index - 1].id);
                }
            }
        },
        created() {
//            todo show Loader
            this.loadPage();
        }
    }
</script>
