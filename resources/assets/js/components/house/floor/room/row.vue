<template>
    <div class="card col-lg-offset-1" style="margin-bottom: 5px">
        <div class="card-header" data-toggle="collapse" :href="'#collapse-' + roomId" style="padding: 10px; background-color: lightgray">
            {{ room.name }} id: {{ room.id }} <a class="btn btn-xs btn-danger pull-right" @click="deleteRoom">-</a>
        </div>

        <detail :roomId="roomId"/>
    </div>
</template>

<script>
    import detail from './details.vue'

    export default {
        props: {
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
        mounted() {

        },
        components: {
            detail
        }
    }
</script>