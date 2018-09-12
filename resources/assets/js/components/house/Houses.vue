<template>
    <div class="container">
        <div class="row">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Houses
                    <a class="btn btn-sm btn-primary pull-right" @click="createHouse">Nieuw huis</a>
                </div>

                <div class="panel-body">
                    Huizen
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            createHouse() {
                this.$store.commit('addHouse');
            }
        }
    }
</script>
