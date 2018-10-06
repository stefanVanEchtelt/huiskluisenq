<?php

namespace App\Http\Controllers;

use App\Device;
use App\Light;
use App\Radiator;
use App\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return response()->json(
            Room::create($request->all())
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function show(Room $room)
    {
        return response()->json($room);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function edit(Room $room)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Room $room)
    {
        return response()->json(
            $room->update($request->all())
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function destroy(Room $room)
    {
        return response()->json(
            $room->delete()
        );
    }

    /**
     * @param int $floorId
     * @return \Illuminate\Http\JsonResponse
     */
    public function getByFloor(int $floorId)
    {
        return response()->json(
            Room::where('floor_id', $floorId)->get()
        );
    }

    public function getAllByHouse(int $houseId)
    {
        return response()->json(
            Room::select([
                'rooms.id',
                'rooms.floor_id',
                'rooms.name',
                'rooms.square_meter',
                'rooms.created_at',
                'rooms.updated_at'
            ])
                ->join('floors', 'floors.id', '=', 'rooms.floor_id')
                ->join('houses', 'houses.id', '=', 'floors.house_id')
                ->where('houses.id', $houseId)
                ->orderBy('floors.sort')
                ->orderBy('rooms.created_at')
                ->get()
        );
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addAll(Request $request)
    {
        $room = Room::create($request->all());

        foreach ($request->get('devices') as $device) {
            $device['room_id'] = $room->id;
            Device::create($device);
        }

        foreach ($request->get('lights') as $light) {
            $light['room_id'] = $room->id;
            Light::create($light);
        }
        foreach ($request->get('radiators') as $radiator) {
            $radiator['room_id'] = $room->id;
            Radiator::create($radiator);
        }

        $room->load('devices');
        $room->load('lights');
        $room->load('radiators');

        return response()->json(
            $room
        );
    }
}
