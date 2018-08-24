<template>
    <div>
        <template v-if="currentFloor">
            <div class="panel panel-default">
                <div class="panel-heading">Vraag 2</div>
                <div class="panel-body" style="font-size: 30px;">
                    Welke ruimtes bevinden zich op de {{ currentFloorPage }}e Verdieping ?
                    <table class="table" style="width: 100%">
                        <thead>
                            <tr>
                                <th>&nbsp;</th>
                                <th>Naam</th>
                                <th>M2</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr  v-for="(room, index) in currentFloor.rooms">
                                    <td>{{ index + 1 }}</td>
                                    <td>
                                        <input class="form-control" type="text" v-model="room.name">
                                    </td>
                                    <td>
                                        <input class="form-control" type="number" v-model="room.cubicMeter" style="width: 100px">
                                    </td>
                                    <td><a class="btn btn-danger" @click="deleteRoom(index)"><i class="far fa-trash-alt"></i></a></td>
                                </tr>
                        </tbody>
                    </table>

                    <a class="btn btn-primary pull-right" @click="addRoom">Kamer toevoegen</a>
                </div>
                <div class="panel-footer">
                    <div class="row">
                        <div class="col-lg-12">
                            <a @click="lastPage" class="btn btn-danger">Vorige</a>
                            <a @click="nextPage" class="btn btn-primary pull-right">Volgende</a>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            floorCount: null,
            floorData: null,
            lastRoom: false,
        },
        data() {
            return {
                totalFloorCount: this.floorCount,
                floorEditData: {},
                currentFloorPage: null,
            }
        },
        computed: {
            floors() {
                if (Object.keys(this.floorEditData).length === 0) {
                    var i;
                    for (i = 1; i < this.totalFloorCount + 1; i++) {
                        if (this.floorData[i]) {
                            this.floorEditData[i] = this.floorData[i];
                        } else {
                            this.floorEditData[i] = {
                                floor: i,
                                rooms: []
                            }
                        }
                    }
                }


                return this.floorEditData;
            },
            loadPage() {
                if (!this.currentFloorPage) {
                    if (this.lastRoom) {
                        this.currentFloorPage = this.floorCount;
                    } else {
                        this.currentFloorPage = 1;
                    }
                }
                return this.currentFloorPage;
            },
            currentFloor() {
                return this.floors[this.loadPage];
            }
        },
        methods: {
            addRoom() {
                this.currentFloor.rooms.push({});
                this.$forceUpdate();
            },
            deleteRoom(index) {
                this.currentFloor.rooms.splice(index, 1);
                this.$forceUpdate();
            },
            nextPage() {
                this.$emit('save-rooms', this.floors);
                if (this.floorCount <= this.currentFloorPage) {
                    this.$emit('page-forward', 2);
                } else {
                    this.currentFloorPage = this.currentFloorPage + 1;
                }
            },
            lastPage() {
                this.$emit('save-rooms', this.floors);
                if (this.currentFloorPage <= 1) {
                    this.$emit('page-back', 2);
                } else {
                    this.currentFloorPage = this.currentFloorPage - 1;
                }
            }
        }
    }
</script>
