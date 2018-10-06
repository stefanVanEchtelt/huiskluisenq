<template>
    <div class="card col-lg-offset-1" style="margin-bottom: 5px">
        <!--<div class="card-header" data-toggle="collapse" :href="'#collapse-' + roomId" style="padding: 10px; background-color: lightgray; cursor: pointer">-->
            <!--{{ room.name }} <a class="btn btn-xs btn-danger pull-right" @click="deleteRoom"><i class="far fa-trash-alt"></i></a>-->
        <!--</div>-->
        <div class="card-header" style="padding: 10px; background-color: lightgray; cursor: pointer" @click="openDetails = !openDetails">
            {{ room.name }} <a class="btn btn-xs btn-danger pull-right" @click="deleteRoom"><i class="far fa-trash-alt"></i></a>
        </div>

        <detail :roomId="roomId" :openDetails="openDetails"/>
    </div>
</template>

<script>
    import detail from './details.vue'

    export default {
        data() {
            return {
                openDetails: false
            }
        },
        props: {
            roomId: Number
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