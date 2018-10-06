<template>
    <div>
        <button class="btn btn-primary pull-right" @click="showAddLightModal = true">Licht toevoegen</button>

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
                        <input class="form-control" v-model="light.name" @change="updateLight(light)">
                    </td>
                    <td>
                        <input class="form-control" type="number" v-model="light.amount" @change="updateLight(light)">
                    </td>
                    <td>
                        Watt
                    </td>
                    <td><a class="btn btn-danger" @click="deleteLight(light.id)"><i class="far fa-trash-alt"></i></a></td>
                </tr>
            </tbody>
        </table>

        <modal v-show="showAddLightModal" @close="showAddLightModal = false">
            <template slot="header">
                Licht toevoegen
                <button type="button" class="close" @click="showAddLightModal = false">
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
            </template>
            <template slot="footer">
                <button type="button" class="btn btn-danger pull-left" @click="showAddLightModal = false">Close</button>
                <button type="button" class="btn btn-primary" @click="createLight">Toevoegen</button>
            </template>
        </modal>
    </div>
</template>

<script>
    import Modal from '../../../../../components/modal.vue'

    export default {
        data() {
            return {
                showAddLightModal: false,
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
            lights() {
                return this.$store.getters.getLightsByRoom(this.roomId);
            }
        },
        methods: {
            deleteLight(lightId) {
                this.$store.commit('deleteLight', lightId);
            },
            updateLight(light) {
                this.$store.commit('updateLight', light);
            },
            createLight() {
                this.createData.room_id = this.roomId;

                this.$store.commit('addLight', this.createData);
                this.createData = {};
                this.showAddLightModal = false;
            }
        },
        mounted() {
            this.$store.dispatch('loadLightsByRoom', this.roomId);
        },
        components: {
            Modal
        }
    }
</script>