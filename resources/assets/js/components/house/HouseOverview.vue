<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading">
                Kamers
            </div>
            <div class="panel-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Name</th>
                            <th>M2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(room, index) in allRooms">
                            <td>{{ index + 1 }}</td>
                            <td>{{ room.name }}</td>
                            <td>{{ room.square_meter }} M2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                Apparaten
            </div>
            <div class="panel-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Name</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(device, index) in houseDevices">
                            <td>{{ index + 1 }}</td>
                            <td>{{ device.name }}</td>
                            <td>{{ device.amount }} {{ deviceType(device.type_id) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                Verlichting
            </div>
            <div class="panel-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Name</th>
                            <th>Watt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(light, index) in houseLights">
                            <td>{{ index + 1 }}</td>
                            <td>{{ light.name }}</td>
                            <td>{{ light.amount }} Watt</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                Verwarming
            </div>
            <div class="panel-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Name</th>
                            <th>Lengte</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(radiator, index) in houseRadiators">
                            <td>{{ index + 1 }}</td>
                            <td>{{ radiator.name }}</td>
                            <td>{{ radiator.length }} lengte</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import router from '../../router'

    export default {
        data() {
            return {
                loading: true,
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
            allRooms() {
                return this.$store.getters.getRoomsByHouse(this.houseId);
            },
            houseDevices() {
                return this.$store.getters.getDevicesByHouse(this.houseId);
            },
            houseLights() {
                return this.$store.getters.getLightsByHouse(this.houseId);
            },
            houseRadiators() {
                return this.$store.getters.getRadiatorsByHouse(this.houseId);
            }
        },
        methods: {
            loadPage() {
                this.loading = true;
                this.$store.dispatch('loadAllRoomsByHouse', this.houseId);
                this.$store.dispatch('loadOutsideLightsByHouse', this.houseId);
                this.$store.dispatch('loadOutsideDevicesByHouse', this.houseId);
                this.$store.dispatch('loadDevicesByHouse', this.houseId);
                this.$store.dispatch('loadLightsByHouse', this.houseId);
                this.$store.dispatch('loadRadiatorsByHouse', this.houseId);
                this.loading = false;
            },
            deviceType(typeId) {
                if (typeId == 1) {
                    return 'Watt';
                } else if (typeId == 2) {
                    return 'Gas';
                } else {
                    return 'onbekend';
                }
            }
        },
        mounted() {
            this.loadPage();
        }
    }
</script>
