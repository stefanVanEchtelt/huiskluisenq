<template>
    <div>
        <div class="col-lg-12" style="background-color: lightgray; margin: 10px; padding: 10px">
            Verdieping id: {{ floorId }} <a class="btn btn-sm btn-primary pull-right">Kamer +</a>
        </div>

        <RoomRow v-for="room in rooms" :roomId="room.id" :key="room.id"/>
    </div>
</template>

<script>
    import RoomRow from './room/row.vue'

    export default {
        props: {
            floorId: Number,
        },
        computed: {
            rooms() {
                return this.$store.getters.getRoomsByFloor(this.floorId);
            }
        },
        mounted() {
            this.$store.dispatch('loadRoomsByFloor', this.floorId);
        },
        components: {
            RoomRow
        }
    }
</script>