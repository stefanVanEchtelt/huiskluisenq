<template>
    <div class="panel panel-default">
        <div class="panel-heading">Vraag 2<!--TODO change--></div>
        <div class="panel-body" style="font-size: 30px;">
            Welke apparaten bevinden zich buiten?
            <table class="table" style="width: 100%">
                <thead>
                <tr>
                    <th>Naam</th>
                    <th>Amount</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="outsideDevice in outsideDevices">
                        <td>
                            <input class="form-control" v-model="outsideDevice.name" @change="updateOutsideDevice(outsideDevice)">
                        </td>
                        <td>
                            <input class="form-control" type="number" v-model="outsideDevice.amount" @change="updateOutsideDevice(outsideDevice)">
                        </td>
                        <td>
                            cm lengte
                        </td>
                        <td><a class="btn btn-danger" @click="deleteOutsideDevice(outsideDevice.id)"><i class="far fa-trash-alt"></i></a></td>
                    </tr>
                </tbody>
            </table>

            <a class="btn btn-primary pull-right" @click="addOutsideDevice">Apperaat toevoegen</a>
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
            }
        },
        watch:{
            '$route' (to, from){
                this.houseId = parseInt(to.params.houseId);
                this.loadPage();
            }
        },
        computed: {
            outsideDevices() {
                return this.$store.getters.getOutsideDevicesByHouse(this.houseId);
            },
            allRooms() {
                return this.$store.getters.getRoomsByHouse(this.houseId);
            }
        },
        methods: {
            loadPage() {
                this.$store.dispatch('loadAllRoomsByHouse', this.houseId);
                this.$store.dispatch('loadOutsideDevicesByHouse', this.houseId);
            },
            addOutsideDevice() {
                this.$store.commit('addEmptyOutsideDevice', this.houseId);
            },
            updateOutsideDevice(outsideDevice) {
                this.$store.commit('updateOutsideDevice', outsideDevice);
            },
            deleteOutsideDevice(OutsideDeviceId) {
                this.$store.commit('deleteOutsideDevice', OutsideDeviceId);
            },
            lastPage() {
                router.push('/house/' + this.houseId + '/radiators/' + this.allRooms[this.allRooms.length - 1].id);
            },
            nextPage() {
                router.push('/house/' + this.houseId + '/outside/lights');
            }
        },
        created() {
            this.loadPage();
        }
    }
</script>
