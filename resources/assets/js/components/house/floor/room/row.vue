<template>
    <div>
        <div class="col-lg-11 col-lg-offset-1" style="background-color: lightgray; margin-bottom: 10px; padding: 10px">
            {{ room.name }} id: {{ room.id }}
            <a class="btn btn-xs btn-danger pull-right">-</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            roomId: Number,
        },
        computed: {
            room() {
                return this.$store.getters.getRoom(this.roomId);
            }
        },
        mounted() {

        },
        components: {

        }
    }
</script>