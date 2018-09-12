<template>
    <div class="panel panel-default" v-if="house">
        <div class="panel-heading">Vraag 1</div>
        <div class="panel-body" style="font-size: 30px;">
            <span style="float: left">In het huis wordt gekookt op?</span>
            <div class="form-group" style="width: 150px; float: left; margin-left: 25px">
                <select class="form-control" :value="house.cooking_type_id" @change="updateCookingType">
                    <!-- TODO FIX ON LOAD SELECTED -->
                    <option value=""> -- keuze -- </option>
                    <option v-for="type in cookTypes" :value="type.id">{{ type.name }}</option>
                </select>
            </div>
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
                houseId: parseInt(router.currentRoute.params.houseId)
            }
        },
        computed: {
            house() {
                return this.$store.getters.getHouse(this.houseId);
            },
            cookTypes() {
                return this.$store.getters.allCookingTypes(this.houseId);
            }
        },
        methods: {
            updateCookingType(event) {
                this.$store.commit('updateHouse', {
                    'id': this.houseId,
                    'cooking_type_id': event.target.value
                });
            },
            lastPage() {
                router.push('/house/' + this.houseId + '/residents');
            },
            nextPage() {
                router.push('/house/' + this.houseId + '/floors');
            }
        },
        created() {
            this.$store.dispatch('loadCookingTypes');
        }
    }
</script>
