<?php

namespace App\Http\Controllers;

use App\OutsideLight;
use Illuminate\Http\Request;

class OutsideLightController extends Controller
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
            OutsideLight::create($request->all())
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\OutsideLight  $outsideLight
     * @return \Illuminate\Http\Response
     */
    public function show(OutsideLight $outsideLight)
    {
        return response()->json(
            $outsideLight
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OutsideLight  $outsideLight
     * @return \Illuminate\Http\Response
     */
    public function edit(OutsideLight $outsideLight)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OutsideLight  $outsideLight
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OutsideLight $outsideLight)
    {
        return response()->json(
            $outsideLight->update($request->all())
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OutsideLight  $outsideLight
     * @return \Illuminate\Http\Response
     */
    public function destroy(OutsideLight $outsideLight)
    {
        return response()->json(
            $outsideLight->delete()
        );
    }

    /**
     * @param int $houseId
     * @return \Illuminate\Http\JsonResponse
     */
    public function getByHouse(int $houseId)
    {
        return response()->json(
            OutsideLight::where('house_id', $houseId)->get()
        );
    }
}
