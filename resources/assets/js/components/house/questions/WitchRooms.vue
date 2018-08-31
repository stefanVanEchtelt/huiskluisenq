<template>
    <div class="panel panel-default">
        <div class="panel-heading">Vraag 2</div>
        <div class="panel-body" style="font-size: 30px;">
            Welke ruimtes bevinden zich op de ({{ storey }} e) verdieping?
            <table class="table" style="width: 100%">
                <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Naam</th>
                    <th>M2</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                <tr v-if="rooms" v-for="(room, index) in rooms">
                    <td>{{ index + 1 }}</td>
                    <td>
                        <input class="form-control" type="text" v-model="room.name" @change="updateRoom(room)">
                    </td>
                    <td>
                        <!--TODO correct Input-->
                        <input class="form-control" type="number" v-model="room.square_meter" style="width: 100px" @change="updateRoom(room)">
                    </td>
                    <td><a class="btn btn-danger" @click="deleteRoom(room.id)"><i class="far fa-trash-alt"></i></a></td>
                </tr>
                </tbody>
            </table>

            <a class="btn btn-primary pull-right" @click="addRoom">Kamer toevoegen</a>
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
                floorId: parseInt(router.currentRoute.params.floorId)
            }
        },
        watch:{
            '$route' (to, from){
                this.houseId = parseInt(to.params.houseId);
                this.floorId = parseInt(to.params.floorId);
                this.loadPage();
            }
        },
        computed: {
            houseFloors() {
                return this.$store.getters.getFloorsByHouse(this.houseId);
            },
            floor() {
                return this.$store.getters.findFloor(this.floorId);
            },
            storey() {
                if (this.houseFloors && this.floor) {
                    return this.houseFloors.indexOf(this.floor) + 1;
                }
            },
            allRooms() {
                return this.$store.getters.getRoomsByHouse(this.houseId);
            },
            rooms() {
                return this.$store.getters.getRoomsByFloor(this.floorId);
            }
        },
        methods: {
            updateRoom(room) {
                this.$store.commit('updateRoom', room);
            },
            lastPage() {
                let index = this.houseFloors.indexOf(this.floor);
                if (0 >= index) {
                    router.push('/house/' + this.houseId + '/floors');
                } else {
                    router.push('/house/' + this.houseId + '/floor/' + this.houseFloors[index - 1].id);
                }
            },
            nextPage() {
                let index = this.houseFloors.indexOf(this.floor);
                if (this.houseFloors[index + 1]) {
                    router.push('/house/' + this.houseId + '/floor/' + this.houseFloors[index + 1].id);
                } else {
                    router.push('/house/' + this.houseId + '/devices/' + this.allRooms[0].id);
                }
            },
            deleteRoom(roomId) {
                this.$store.commit('deleteRoom', roomId);
            },
            addRoom() {
                this.$store.commit('addEmptyRoom', this.floorId);
            },
            loadPage() {
                this.$store.dispatch('loadAllRoomsByHouse', this.houseId);
            }
        },
        created() {
            this.loadPage();
        }
    }
</script>
