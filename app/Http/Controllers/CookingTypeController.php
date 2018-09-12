<?php

namespace App\Http\Controllers;

use App\CookingType;
use Illuminate\Http\Request;

class CookingTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            CookingType::all()
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
            CookingType::create($request->all())
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CookingType  $cookingType
     * @return \Illuminate\Http\Response
     */
    public function show(CookingType $cookingType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CookingType  $cookingType
     * @return \Illuminate\Http\Response
     */
    public function edit(CookingType $cookingType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CookingType  $cookingType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CookingType $cookingType)
    {
        return response()->json(
            $cookingType->update($request->all())
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CookingType  $device
     * @return \Illuminate\Http\Response
     */
    public function destroy(CookingType $cookingType)
    {
        return response()->json(
            $cookingType->delete()
        );
    }

    /**
     * @param int $roomId
     * @return \Illuminate\Http\JsonResponse
     */
    public function getByRoom(int $roomId)
    {
        return response()->json(
            CookingType::where('room_id', $roomId)->get()
        );
    }

    /**
     * @param int $houseId
     * @return \Illuminate\Http\JsonResponse
     */
    public function getByHouse(int $houseId)
    {
        return response()->json(
            CookingType::whereHas('room.floor', function ($q) use ($houseId) {
                $q->where('house_id', $houseId);
            })->get()
        );
    }
}
