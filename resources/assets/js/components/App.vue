<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        mounted() {
            // #todo load id by url
            this.$store.dispatch('loadHouse', 1);
            this.$store.dispatch('loadFloors', 1);
        }
    }
</script>