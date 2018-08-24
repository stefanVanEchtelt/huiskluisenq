<template>
    <div class="panel panel-default">
        <div class="panel-heading">Vraag 1</div>
        <div class="panel-body" style="font-size: 30px;">
            Hoeveel verdiepingen heeft de woning? <input type="number" v-model="floorCount" style="width: 75px">
        </div>
        <div class="panel-footer">
            <div class="row">
                <div class="col-lg-12">
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
            }
        },
        computed: {
            floorCount: {
                get () {
                    // #todo load id by url
                    var floorCount = this.$store.getters.getFloorsByHouse(1).length;
                    return this.floorCountEdit = floorCount;
                },
                set(value) {
                    this.floorCountEdit = value;
                }
            }
        },
        methods: {
            saveRoomCount() {
                this.$store.commit('updateFloorsByCount', this.floorCountEdit);
                // #todo load id by url Load first floor
                router.push('/house/1/floor/4');
            }
        }
    }
</script>
