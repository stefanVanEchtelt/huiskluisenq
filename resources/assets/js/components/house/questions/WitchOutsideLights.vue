<template>
    <div class="panel panel-default">
        <div class="panel-heading">Vraag 2<!--TODO change--></div>
        <div class="panel-body" style="font-size: 30px;">
            Welke lichten bevinden zich buiten?
            <table class="table" style="width: 100%">
                <thead>
                <tr>
                    <th>Naam</th>
                    <th>Amount</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="outsideLight in outsideLights">
                    <td>
                        <input class="form-control" v-model="outsideLight.name" @change="updateOutsideLight(outsideLight)">
                    </td>
                    <td>
                        <input class="form-control" type="number" v-model="outsideLight.amount" @change="updateOutsideLight(outsideLight)">
                    </td>
                    <td>
                        Watt
                    </td>
                    <td><a class="btn btn-danger" @click="deleteOutsideLight(outsideLight.id)"><i class="far fa-trash-alt"></i></a></td>
                </tr>
                </tbody>
            </table>

            <a class="btn btn-primary pull-right" @click="addOutsideLight">Light toevoegen</a>
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
            outsideLights() {
                return this.$store.getters.getOutsideLightsByHouse(this.houseId);
            }
        },
        methods: {
            loadPage() {
                this.$store.dispatch('loadOutsideLightsByHouse', this.houseId);
            },
            addOutsideLight() {
                this.$store.commit('addEmptyOutsideLight', this.houseId);
            },
            updateOutsideLight(outsideLight) {
                this.$store.commit('updateOutsideLight', outsideLight);
            },
            deleteOutsideLight(OutsideLightId) {
                this.$store.commit('deleteOutsideLight', OutsideLightId);
            },
            lastPage() {
                router.push('/house/' + this.houseId + '/outside/devices');
            },
            nextPage() {
                console.log('load next page');
//                TODO load next page
            }
        },
        created() {
            this.loadPage();
        }
    }
</script>
