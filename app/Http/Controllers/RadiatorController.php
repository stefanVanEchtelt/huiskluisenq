<?php

namespace App\Http\Controllers;

use App\Radiator;
use Illuminate\Http\Request;

class RadiatorController extends Controller
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
            Radiator::create($request->all())
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Radiator  $radiator
     * @return \Illuminate\Http\Response
     */
    public function show(Radiator $radiator)
    {
        return response()->json(
            $radiator
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Radiator  $radiator
     * @return \Illuminate\Http\Response
     */
    public function edit(Radiator $radiator)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Radiator  $radiator
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Radiator $radiator)
    {
        return response()->json(
            $radiator->update($request->all())
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Radiator  $radiator
     * @return \Illuminate\Http\Response
     */
    public function destroy(Radiator $radiator)
    {
        return response()->json(
            $radiator->delete()
        );
    }

    /**
     * @param int $roomId
     * @return \Illuminate\Http\JsonResponse
     */
    public function getByRoom(int $roomId)
    {
        return response()->json(
            Radiator::where('room_id', $roomId)->get()
        );
    }
}
