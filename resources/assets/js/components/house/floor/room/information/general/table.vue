<template>
    <div>
        <br>
        <div class="row">
            <div class="col-lg-4">
                <div class="form-group">
                    <label for="name">Naam</label>
                    <input class="form-control" id="name" placeholder="Naam" v-model="room.name" @change="updateRoom()">
                </div>
            </div>

            <div class="col-lg-4">
                <div class="form-group">
                    <label for="square_meter">Vierkante meters</label>
                    <input class="form-control" type="number" id="square_meter" placeholder="M2" v-model="room.square_meter" @change="updateRoom()">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            roomId: Number
        },
        computed: {
            room() {
                return this.$store.getters.getRoom(this.roomId);
            }
        },
        methods: {
            updateRoom() {
                this.$store.commit('updateRoom', this.room);
            }
        },
    }
</script>