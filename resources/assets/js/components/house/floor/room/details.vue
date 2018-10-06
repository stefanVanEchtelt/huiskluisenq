<template>
    <div v-if="openDetails" class="collapse" v-bind:class="{ 'in': openDetails }" style="background-color: #fbffff">
    <!--<div :id="'collapse-' + roomId" class="collapse" data-parent="#accordion" style="background-color: #fbffff">-->
        <div class="card-body">

            <div class="panel-body">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item active">
                        <a class="nav-link active" data-toggle="pill" :href="'#general-' + roomId" role="tab" aria-selected="true">Algemeen</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="pill" :href="'#devices-' + roomId" role="tab" aria-selected="false">Apperaten</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="pill" :href="'#lights-' + roomId" role="tab" aria-selected="false">Lichten</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="pill" :href="'#radiators-' + roomId" role="tab" aria-selected="false">Radiatoren</a>
                    </li>
                </ul>

                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade active in" :id="'general-' + roomId" role="tabpanel">
                        <generalTable :roomId="roomId" />
                    </div>
                    <div class="tab-pane fade" :id="'devices-' + roomId" role="tabpanel">
                        <devicesTable :roomId="roomId" />
                    </div>
                    <div class="tab-pane fade" :id="'lights-' + roomId" role="tabpanel">
                        <lightsTable :roomId="roomId" />
                    </div>
                    <div class="tab-pane fade" :id="'radiators-' + roomId" role="tabpanel">
                        <radiatorsTable :roomId="roomId" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import generalTable from './information/general/table.vue'
    import devicesTable from './information/devices/table.vue'
    import lightsTable from './information/lights/table.vue'
    import radiatorsTable from './information/radiators/table.vue'

    export default {
        props: {
            openDetails: Boolean,
            roomId: Number,
        },
        computed: {
            room() {
                return this.$store.getters.getRoom(this.roomId);
            }
        },
        methods: {
            deleteRoom() {
                this.$store.commit('deleteRoom', this.roomId);
            }
        },
        components: {
            generalTable,
            devicesTable,
            lightsTable,
            radiatorsTable
        }
    }
</script>