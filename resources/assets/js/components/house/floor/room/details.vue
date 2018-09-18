<template>
    <div :id="'collapse-' + roomId" class="collapse" data-parent="#accordion" style="background-color: #fbffff">
        <div class="card-body">

            <div class="panel-body">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
                    </li>
                </ul>

                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        111111111111
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        222222222222
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        33333333333333
                    </div>
                </div>

                <!--<table class="table table-striped">-->
                    <!--<thead>-->
                        <!--<tr>-->
                            <!--<th>x</th>-->
                            <!--<th>x</th>-->
                        <!--</tr>-->
                    <!--</thead>-->
                    <!--<tbody>-->
                        <!--<tr>-->
                            <!--<td>ted</td>-->
                            <!--<td>ted</td>-->
                        <!--</tr>-->
                        <!--<tr>-->
                            <!--<td>ted</td>-->
                            <!--<td>ted</td>-->
                        <!--</tr>-->
                        <!--<tr>-->
                            <!--<td>ted</td>-->
                            <!--<td>ted</td>-->
                        <!--</tr>-->
                    <!--</tbody>-->
                <!--</table>-->
            </div>

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
        methods: {
            deleteRoom() {
                this.$store.commit('deleteRoom', this.roomId);
            }
        },
        mounted() {

        },
        components: {

        }
    }
</script>