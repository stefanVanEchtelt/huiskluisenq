<template>
    <div class="panel panel-default" v-if="room">
        <div class="panel-heading">Vraag 2</div>
        <div class="panel-body" style="font-size: 30px;">
            Welke apparaten bevinden zich in {{ room.name ? room.name : '..' }} op de {{ storey }}e verdieping?
            <table class="table" style="width: 100%">
                <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Naam</th>
                    <th>Amount</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="device in devices">
                        <td>1</td>
                        <td>{{ device.name }}</td>
                        <td>{{ device.amount }}</td>
                        <td>{{ device.type_id }}</td>
                    </tr>
                </tbody>
            </table>

            <a class="btn btn-primary pull-right" @click="addDevice">Apperaat toevoegen</a>
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
                console.log(this.houseFloors);
                console.log(this.houseFloors.indexOf(this.floor));

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
            devices() {
                return this.$store.getters.getDevicesByRoom(this.roomId);
            }
        },
        methods: {
            loadPage() {
                this.$store.dispatch('loadAllRoomsByHouse', this.houseId);
                this.$store.dispatch('loadDevicesByRoom', this.roomId);
                this.$store.dispatch('loadRoom', this.roomId);
            },
            addDevice() {
                this.$store.commit('addEmptyDevice', this.roomId);
            },
            nextPage() {
                let index = this.allRooms.indexOf(this.room);
                if (this.allRooms[index + 1]) {
                    router.push('/house/' + this.houseId + '/devices/' + this.allRooms[index + 1].id);
                } else {
                    // TODO
                    console.log(' --- xxx --- ');
                    console.log(' load another Page');
                }
            },
            lastPage() {
                let index = this.allRooms.indexOf(this.room);
                if (index <= 0) {
                    router.push('/house/' + this.houseId + '/floor/' + this.houseFloors[this.houseFloors.length - 1].id);
                } else {
                    router.push('/house/' + this.houseId + '/devices/' + this.allRooms[index - 1].id);
                }
            }
        },
        created() {
//            todo show Loader
            this.loadPage();
        }
    }
</script>
