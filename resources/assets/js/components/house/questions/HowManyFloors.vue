<template>
    <div class="panel panel-default">
        <div class="panel-heading">Vraag 1</div>
        <div class="panel-body" style="font-size: 30px;">
            Hoeveel verdiepingen heeft de woning? <input type="number" v-model="floorCount" style="width: 75px">
        </div>
        <div class="panel-footer">
            <div class="row">
                <div class="col-lg-12">
                    <a @click="lastPage" class="btn btn-danger">Vorige</a>
                    <a @click="saveRoomCount" class="btn btn-primary pull-right">Volgende</a>
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
                floorCountEdit: null,
                houseId: parseInt(router.currentRoute.params.houseId)
            }
        },
        computed: {
            floorCount: {
                get () {
                    return this.floorCountEdit = this.$store.getters.getFloorsByHouse(this.houseId).length;
                },
                set(value) {
                    this.floorCountEdit = value;
                }
            }
        },
        methods: {
            lastPage() {
                router.push('/home');
            },
            saveRoomCount() {
                this.$store.commit('updateFloorsByCount', {'floorCount': this.floorCountEdit, 'houseId': this.houseId});
                // TODO PROMISE instead of timeout
                setTimeout(() => {
                    router.push('/house/' + this.houseId + '/floor/' + this.$store.getters.getFloorsByHouse(this.houseId)[0].id);
                }, 300);

            }
        }
    }
</script>
