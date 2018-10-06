<template>
    <div>
        <button class="btn btn-primary pull-right" @click="showAddDeviceModal = true">Apperaat toevoegen</button>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Naam</th>
                    <th>Aantal</th>
                    <th>Type</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(device, index) in devices">
                    <td>
                        <input class="form-control" v-model="device.name" @change="updateDevice(device)">
                    </td>
                    <td>
                        <input class="form-control" type="number" v-model="device.amount" @change="updateDevice(device)">
                    </td>
                    <td>
                        <div class="form-group">
                            <select class="form-control" v-model="device.type_id" @change="updateDevice(device)">
                                <option value="">-- Keuze --</option>
                                <option value="1">Watt</option>
                                <option value="2">Gas</option>
                            </select>
                        </div>
                    </td>
                    <td><a class="btn btn-danger" @click="deleteDevice(device.id)"><i class="far fa-trash-alt"></i></a></td>
                </tr>
            </tbody>
        </table>

        <modal v-show="showAddDeviceModal" @close="showAddDeviceModal = false">
            <template slot="header">
                Apperaat toevoegen
                <button type="button" class="close" @click="showAddDeviceModal = false">
                    <span aria-hidden="true">&times;</span>
                </button>
            </template>
            <template slot="body">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="name">Naam</label>
                            <input class="form-control" id="name" placeholder="Naam" v-model="createData.name">
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="amount">Aantal</label>
                            <input class="form-control" type="number" id="amount" placeholder="Aantal" v-model="createData.amount">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="type_id">Naam</label>
                            <select class="form-control" v-model="createData.type_id">
                                <option>-- Keuze --</option>
                                <option value="1">Watt</option>
                                <option value="2">Gas</option>
                            </select>
                        </div>
                    </div>
                </div>
            </template>
            <template slot="footer">
                <button type="button" class="btn btn-danger pull-left" @click="showAddDeviceModal = false">Close</button>
                <button type="button" class="btn btn-primary" @click="createDevice">Toevoegen</button>
            </template>
        </modal>
    </div>
</template>

<script>
    import Modal from '../../../../../components/modal.vue'

    export default {
        data() {
            return {
                showAddDeviceModal: false,
                createData: {}
            }
        },
        props: {
            roomId: Number
        },
        computed: {
            room() {
                return this.$store.getters.getRoom(this.roomId);
            },
            devices() {
                return this.$store.getters.getDevicesByRoom(this.roomId);
            }
        },
        methods: {
            updateDevice(device) {
                this.$store.commit('updateDevice', device);
            },
            deleteDevice(deviceId) {
                this.$store.commit('deleteDevice', deviceId);
            },
            createDevice() {
                this.createData.room_id = this.roomId;

                this.$store.commit('addDevice', this.createData);
                this.createData = {};
                this.showAddDeviceModal = false;
            }
        },
        mounted() {
            this.$store.dispatch('loadDevicesByRoom', this.roomId);
        },
        components: {
            Modal
        }
    }
</script>