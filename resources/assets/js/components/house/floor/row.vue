<template>
    <div>
        <div class="col-lg-12" style="background-color: lightgray; margin: 10px; padding: 10px">
            Verdieping id: {{ floorId }} <a class="btn btn-sm btn-primary pull-right" @click="addRoom">Kamer +</a>
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

                <a class="btn btn-primary pull-right" @click="addDevice">Apparaat toevoegen</a>
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>Naam</th>
                        <th>&nbsp;</th>
                        <th>Type</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody v-for="device in devices">
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                    </tbody>
                </table>

                <a class="btn btn-primary pull-right" @click="addRadiator">Radiatoor toevoegen</a>
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>Naam</th>
                        <th>Aantal</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody v-for="radiator in radiators">
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                    </tbody>
                </table>

                <a class="btn btn-primary pull-right" @click="addLight">Verlichting toevoegen</a>
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>Naam</th>
                        <th>Aantal</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody v-for="light in lights">
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                    </tbody>
                </table>


            </template>
            <template slot="footer">
                <button type="button" class="btn btn-danger pull-left" @click="closeModal">Close</button>
                <button type="button" class="btn btn-primary">Toevoegen</button>
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
            addDevice() {
                this.devices.push({});
            },
            addRadiator() {
                this.radiators.push({});
            },
            addLight() {
                this.lights.push({});
            },
            closeModal() {
                this.showAddRoomModal = false;
            },
            addRoom() {
                this.showAddRoomModal = true;
            },
            createRoom() {
                this.$store.commit('addEmptyRoom', this.floorId);
            }
        },
        components: {
            RoomRow,
            Modal
        }
    }
</script>