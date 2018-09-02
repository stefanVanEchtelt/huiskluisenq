<?php

namespace App\Http\Controllers;

use App\Device;
use Illuminate\Http\Request;

class DeviceController extends Controller
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
            Device::create($request->all())
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Device  $device
     * @return \Illuminate\Http\Response
     */
    public function show(Device $device)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Device  $device
     * @return \Illuminate\Http\Response
     */
    public function edit(Device $device)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Device  $device
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Device $device)
    {
        return response()->json(
            $device->update($request->all())
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Device  $device
     * @return \Illuminate\Http\Response
     */
    public function destroy(Device $device)
    {
        return response()->json(
            $device->delete()
        );
    }

    /**
     * @param int $roomId
     * @return \Illuminate\Http\JsonResponse
     */
    public function getByRoom(int $roomId)
    {
        return response()->json(
            Device::where('room_id', $roomId)->get()
        );
    }

    /**
     * @param int $houseId
     * @return \Illuminate\Http\JsonResponse
     */
    public function getByHouse(int $houseId)
    {
        return response()->json(
            Device::whereHas('room.floor', function ($q) use ($houseId) {
                $q->where('house_id', $houseId);
            })->get()
        );
    }
}
