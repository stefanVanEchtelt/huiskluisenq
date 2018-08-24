@extends('layouts.app')

@section('content')
    <div class="container" id="questions">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">

                <template v-if="questions[1]">
                    <q1-component @click="saveFloorCount" :floor-count="floorCount" />
                </template>

                <template v-if="questions[2]">
                    <q2-component v-on:page-back="handelLastQuestionLoad" v-on:page-forward="handelNextQuestionLoad" v-on:save-rooms="saveRooms" :floor-count="floorCount" :floor-data="floorData" :last-room="goPageBack"/>
                </template>

                <template v-if="questions[3]">
                    <q3-component v-on:page-back="handelLastQuestionLoad" v-on:page-forward="handelNextQuestionLoad" />
                </template>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    {{--<script>--}}
        {{--new Vue({--}}
            {{--el: '#questions',--}}
            {{--data: {--}}
                {{--goPageBack: false,--}}
                {{--floorCount: 3,--}}
                {{--floorData: {},--}}
                {{--questions: {--}}
                    {{--1: false,--}}
                    {{--2: false,--}}
                    {{--3: true,--}}
                    {{--4: false,--}}
                    {{--5: false,--}}
                    {{--6: false,--}}
                {{--}--}}
            {{--},--}}
            {{--methods: {--}}
                {{--saveFloorCount(data) {--}}
                    {{--this.floorCount = parseInt(data);--}}
                    {{--this.handelNextQuestionLoad(1);--}}
                {{--},--}}
                {{--saveRooms(floors) {--}}
                    {{--console.log(floors);--}}
                    {{--this.floorData = floors;--}}
                {{--},--}}
                {{--handelNextQuestionLoad(number) {--}}
                    {{--this.goPageBack = false;--}}
                    {{--this.questions[number] = false;--}}
                    {{--this.questions[number + 1] = true;--}}
                {{--},--}}
                {{--handelLastQuestionLoad(number) {--}}
                    {{--this.goPageBack = true;--}}
                    {{--this.questions[number] = false;--}}
                    {{--this.questions[number - 1] = true;--}}
                {{--}--}}
            {{--}--}}
        {{--});--}}
    {{--</script>--}}
@endsection

