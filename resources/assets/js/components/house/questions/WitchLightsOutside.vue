<template>
    <div class="panel panel-default" v-if="room">
        <div class="panel-heading">Vraag 2</div>
        <div class="panel-body" style="font-size: 30px;">
            Welke verlichting bevint zich buiten?
            <table class="table" style="width: 100%">
                <thead>
                <tr>
                    <th>Naam</th>
                    <th>Amount</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <!--<a class="btn btn-primary pull-right" @click="addDevice">Apperaat toevoegen</a>-->
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

        },
        methods: {
            loadPage() {

            },
            lastPage() {

            },
            nextPage() {

            }
        },
        created() {
//            todo show Loader
            this.loadPage();
        }
    }
</script>
