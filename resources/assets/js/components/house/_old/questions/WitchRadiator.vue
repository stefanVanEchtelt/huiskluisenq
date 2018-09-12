<template>
    <div class="panel panel-default" v-if="room">
        <div class="panel-heading">Vraag 2</div>
        <div class="panel-body" style="font-size: 30px;">
            Welke radiatoren bevindt zich in de {{ room.name ? room.name : '' }} op de {{ storey }}e verdieping?
            <table class="table" style="width: 100%">
                <thead>
                <tr>
                    <th>Naam</th>
                    <th>Aantal</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="radiator in radiators">
                    <td>
                        <input class="form-control" v-model="radiator.name" @change="updateRadiator(radiator)">
                    </td>
                    <td>
                        <input class="form-control" type="number" v-model="radiator.length" @change="updateRadiator(radiator)">
                    </td>
                    <td>
                        cm lengte
                    </td>
                    <td><a class="btn btn-danger" @click="deleteRadiator(radiator.id)"><i class="far fa-trash-alt"></i></a></td>
                </tr>
                </tbody>
            </table>

            <a class="btn btn-primary pull-right" @click="addRadiator">Verlichting toevoegen</a>
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
    import Floor from '../../../store/modules/floors'
    import Room from '../../../store/modules/rooms'

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
                return Room.getters.getRoom(Room.state, this.roomId);
            },
            floor() {
                if (this.room) {
                    return Floor.getters.findFloor(Floor.state, this.room.floor_id);
                }
            },
            radiators() {
                return this.$store.getters.getRadiatorsByRoom(this.roomId);
            }
        },
        methods: {
            loadPage() {
                this.$store.dispatch('loadAllRoomsByHouse', this.houseId);
                this.$store.dispatch('loadRadiatorsByRoom', this.roomId);
                this.$store.dispatch('loadRoom', this.roomId);
            },
            addRadiator() {
                this.$store.commit('addEmptyRadiator', this.roomId);
            },
            updateRadiator(light) {
                this.$store.commit('updateRadiator', light);
            },
            deleteRadiator(radiatorId) {
                this.$store.commit('deleteRadiator', radiatorId);
            },
            nextPage() {
                let index = this.allRooms.indexOf(this.room);
                if (this.allRooms[index + 1]) {
                    router.push('/house/' + this.houseId + '/radiators/' + this.allRooms[index + 1].id);
                } else {
                    router.push('/house/' + this.houseId + '/outside/devices');
                }
            },
            lastPage() {
                let index = this.allRooms.indexOf(this.room);
                if (index <= 0) {
                    router.push('/house/' + this.houseId + '/lights/' + this.allRooms[this.allRooms.length - 1].id);
                } else {
                    router.push('/house/' + this.houseId + '/radiators/' + this.allRooms[index - 1].id);
                }
            }
        },
        created() {
            this.loadPage();
        }
    }
</script>
