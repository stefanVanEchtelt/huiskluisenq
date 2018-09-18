<template>
    <div v-if="floors">
        <div class="row">
            <div class="col-lg-12">
                <a class="btn btn-primary" @click="addFloor">Verdieping +</a>
            </div>
        </div>

        <FloorRow v-for="floor in floors" :floorId="floor.id" :key="floor.id"/>
    </div>
</template>

<script>
    import FloorRow from '../floor/row.vue'

    export default {
        props: {
            houseId: Number,
        },
        computed: {
            floors() {
                return this.$store.getters.getFloorsByHouse(this.houseId);
            }
        },
        mounted() {
            if (this.houseId) {
                this.$store.dispatch('loadFloors', this.houseId);
            }
        },
        methods: {
            addFloor() {
                this.$store.commit('createFloor', this.houseId);
            }
        },
        components: {
            FloorRow
        }
    }
</script>