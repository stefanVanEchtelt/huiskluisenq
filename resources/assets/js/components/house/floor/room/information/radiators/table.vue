<template>
    <div>
        <button class="btn btn-primary pull-right" @click="showAddRadiatorModal = true">Radiator toevoegen</button>

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

        <modal v-show="showAddRadiatorModal" @close="showAddRadiatorModal = false">
            <template slot="header">
                Radiator toevoegen
                <button type="button" class="close" @click="showAddRadiatorModal = false">
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
                            <label for="length">Aantal</label>
                            <input class="form-control" type="number" id="length" placeholder="Aantal" v-model="createData.length">
                        </div>
                    </div>
                </div>

            </template>
            <template slot="footer">
                <button type="button" class="btn btn-danger pull-left" @click="showAddRadiatorModal = false">Close</button>
                <button type="button" class="btn btn-primary" @click="createRadiator">Toevoegen</button>
            </template>
        </modal>
    </div>
</template>

<script>
    import Modal from '../../../../../components/modal.vue'

    export default {
        data() {
            return {
                showAddRadiatorModal: false,
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
            radiators() {
                return this.$store.getters.getRadiatorsByRoom(this.roomId);
            }
        },
        methods: {
            updateRadiator(radiator) {
                this.$store.commit('updateRadiator', radiator);
            },
            deleteRadiator(radiatorId) {
                this.$store.commit('deleteRadiator', radiatorId);
            },
            createRadiator() {
                this.createData.room_id = this.roomId;

                this.$store.commit('addRadiator', this.createData);
                this.createData = {};
                this.showAddRadiatorModal = false;
            }
        },
        mounted() {
            this.$store.dispatch('loadRadiatorsByRoom', this.roomId);
        },
        components: {
            Modal
        }
    }
</script>
