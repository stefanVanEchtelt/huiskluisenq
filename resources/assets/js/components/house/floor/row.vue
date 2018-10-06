<template>
    <div>
        <div class="col-lg-12" style="background-color: lightgray; margin: 10px; padding: 10px">
            Verdieping id: {{ floorId }}
            <a class="btn btn-xs btn-danger pull-right" @click="deleteFloor" style="margin: 5px 0 0 10px"><i class="far fa-trash-alt"></i></a>
            <a class="btn btn-sm btn-primary pull-right" @click="openAddRoomModal">Kamer +</a>
        </div>

        <div class="clearfix"></div>

        <div class="floorRooms">
            <RoomRow v-for="room in rooms" :roomId="room.id" :key="room.id"/>
        </div>

        <modal v-show="showAddRoomModal" @close="closeModal">
            <template slot="header">
                Kamer toevoegen
                <button type="button" class="close" @click="closeModal">
                    <span aria-hidden="true">&times;</span>
                </button>
            </template>
            <template slot="body">

                <div class="row">
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label for="name">Naam</label>
                            <input class="form-control" id="name" placeholder="Naam" v-model="createName">
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="form-group">
                            <label for="square_meter">Vierkante meters</label>
                            <input class="form-control" type="number" id="square_meter" placeholder="M2" v-model="create_square_meter">
                        </div>
                    </div>
                </div>

                <br>

                <div class="col-lg-12">
                    <b>Aparaten</b>
                    <a class="btn btn-primary pull-right" @click="addDevice">Apparaat toevoegen</a>
                </div>
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>Naam</th>
                        <th>&nbsp;</th>
                        <th>Type</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(device, index) in devices">
                            <td>
                                <input class="form-control" v-model="device.name">
                            </td>
                            <td>
                                <input class="form-control" type="number" v-model="device.amount">
                            </td>
                            <td>
                                <div class="form-group">
                                    <!--TODO options-->
                                    <select class="form-control" v-model="device.type_id">
                                        <option value="">-- Keuze --</option>
                                        <option value="1">Watt</option>
                                        <option value="2">Gas</option>
                                    </select>
                                </div>
                            </td>
                            <td><a class="btn btn-danger" @click="devices.splice(index, 1)"><i class="far fa-trash-alt"></i></a></td>
                        </tr>
                    </tbody>
                </table>

                <div class="col-lg-12">
                    <b>Verlichting</b>
                    <a class="btn btn-primary pull-right" @click="addLight">Verlichting toevoegen</a>
                </div>
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>Naam</th>
                        <th>Aantal</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(light, index) in lights">
                            <td>
                                <input class="form-control" v-model="light.name">
                            </td>
                            <td>
                                <input class="form-control" type="number" v-model="light.amount">
                            </td>
                            <td>
                                Watt
                            </td>
                            <td><a class="btn btn-danger" @click="lights.splice(index, 1)"><i class="far fa-trash-alt"></i></a></td>
                        </tr>
                    </tbody>
                </table>

                <div class="col-lg-12">
                    <b>Radiatoren</b>
                    <a class="btn btn-primary pull-right" @click="addRadiator">Radiatoor toevoegen</a>
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Naam</th>
                            <th>Aantal</th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(radiator, index) in radiators">
                            <td>
                                <input class="form-control" v-model="radiator.name">
                            </td>
                            <td>
                                <input class="form-control" type="number" v-model="radiator.length">
                            </td>
                            <td>
                                cm lengte
                            </td>
                            <td><a class="btn btn-danger" @click="radiators.splice(index, 1)"><i class="far fa-trash-alt"></i></a></td>
                        </tr>
                    </tbody>
                </table>

                <div class="clearfix"></div>
            </template>
            <template slot="footer">
                <button type="button" class="btn btn-danger pull-left" @click="closeModal">Close</button>
                <button type="button" class="btn btn-primary" @click="createRoom">Toevoegen</button>
            </template>
        </modal>
    </div>
</template>

<script>
    import RoomRow from './room/row.vue'
    import Modal from '../../components/modal.vue'

    export default {
        data() {
            return {
                showAddRoomModal: false,
                createName: null,
                create_square_meter: null,
                devices: [],
                radiators: [],
                lights: [],
            }
        },
        props: {
            floorId: Number,
        },
        computed: {
            rooms() {
                return this.$store.getters.getRoomsByFloor(this.floorId);
            }
        },
        mounted() {
            this.$store.dispatch('loadRoomsByFloor', this.floorId);
        },
        methods: {
            deleteFloor() {
                this.$store.commit('deleteFloor', this.floorId);
            },
            addDevice() {
                this.devices.push({
                    name: null,
                    amount: 0,
                    type_id: '',
                });
            },
            addLight() {
                this.lights.push({
                    name: null,
                    amount: 0,
                });
            },
            addRadiator() {
                this.radiators.push({
                    name: null,
                    length: 0,
                });
            },
            closeModal() {
                this.showAddRoomModal = false;
            },
            openAddRoomModal() {
                this.showAddRoomModal = true;
            },
            createRoom() {
                this.showAddRoomModal = false;
                this.$store.commit('addTotalRoom', {
                    name: this.createName,
                    square_meter: this.create_square_meter,
                    floor_id: this.floorId,
                    devices: this.devices,
                    lights: this.lights,
                    radiators: this.radiators,
                });
            }
        },
        components: {
            RoomRow,
            Modal
        }
    }
</script>