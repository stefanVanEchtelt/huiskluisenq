<?php

namespace App\Http\Controllers;

use App\OutsideDevice;
use Illuminate\Http\Request;

class OutsideDeviceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            OutsideDevice::all()
        );
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
            OutsideDevice::create($request->all())
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\OutsideDevice  $outsideDevice
     * @return \Illuminate\Http\Response
     */
    public function show(OutsideDevice $outsideDevice)
    {
        return response()->json(
            $outsideDevice
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OutsideDevice  $outsideDevice
     * @return \Illuminate\Http\Response
     */
    public function edit(OutsideDevice $outsideDevice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OutsideDevice  $outsideDevice
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OutsideDevice $outsideDevice)
    {
        return response()->json(
            $outsideDevice->update($request->all())
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OutsideDevice  $outsideDevice
     * @return \Illuminate\Http\Response
     */
    public function destroy(OutsideDevice $outsideDevice)
    {
        return response()->json(
            $outsideDevice->delete()
        );
    }

    /**
     * @param int $houseId
     * @return \Illuminate\Http\JsonResponse
     */
    public function getByHouse(int $houseId)
    {
        return response()->json(
            OutsideDevice::where('house_id', $houseId)->get()
        );
    }
}
