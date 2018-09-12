<template>
    <div id="wrapper" class="toggled">

        <Sidebar />

        <div id="page-content-wrapper">
            <!--<div class="container-fluid">-->
                <Floors :houseId="houseId"/>
                <!--<h1>Simple Sidebar</h1>-->
                <!--<p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>-->
                <!--<p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>-->
                <!--<a href="#menu-toggle" class="btn btn-secondary" id="menu-toggle">Toggle Menu</a>-->
            <!--</div>-->
        </div>

    </div>
</template>

<script>
    import router from '../../router'
    import Sidebar from './layout/Sidebar.vue'
    import Floors from './pages/Floors.vue'

    export default {
        data() {
            return {
                houseId: parseInt(router.currentRoute.params.houseId),
            }
        },
        mounted() {
            this.$store.dispatch('loadAllRoomsByHouse', this.houseId);
        },
        components: {
            Sidebar,
            Floors
        }
    }
</script>
