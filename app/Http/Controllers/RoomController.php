<?php

namespace App\Http\Controllers;

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
}
