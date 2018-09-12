<template>
    <div class="panel panel-default" v-if="house">
        <div class="panel-heading">Vraag 1</div>
        <div class="panel-body" style="font-size: 30px;">
            Hoeveel personen verblijven er in de woning?
            <input type="number" :value="house.residents_count" @change="updateResidentCount" style="width: 75px">
        </div>
        <div class="panel-footer">
            <div class="row">
                <div class="col-lg-12">
                    <a @click="lastPage" class="btn btn-danger">Vorige</a>
                    <a @click="savePersonCount" class="btn btn-primary pull-right">Volgende</a>
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
                houseId: parseInt(router.currentRoute.params.houseId)
            }
        },
        computed: {
            house() {
                return this.$store.getters.getHouse(this.houseId);
            }
        },
        methods: {
            updateResidentCount(event) {
                this.$store.commit('updateHouse', {
                    'id': this.houseId,
                    'residents_count': event.target.value
                });
            },
            lastPage() {
                router.push('/home');
            },
            savePersonCount() {
                router.push('/house/' + this.houseId + '/cooked/on');
            }
        }
    }
</script>
