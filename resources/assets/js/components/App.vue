<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import router from '../router'

    export default {
        data() {
            return {
                houseId: parseInt(router.currentRoute.params.houseId)
            }
        },
        mounted() {
            if (this.houseId) {
                this.$store.dispatch('loadHouse', this.houseId);
            }
        }
    }
</script>