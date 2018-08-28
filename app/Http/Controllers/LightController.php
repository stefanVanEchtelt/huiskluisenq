<?php

namespace App\Http\Controllers;

use App\Light;
use Illuminate\Http\Request;

class LightController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            Light::all()
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
            Light::create($request->all())
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Light  $light
     * @return \Illuminate\Http\Response
     */
    public function show(Light $light)
    {
        return response()->json(
            $light
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Light  $light
     * @return \Illuminate\Http\Response
     */
    public function edit(Light $light)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Light  $light
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Light $light)
    {
        return response()->json(
            $light->update($request->all())
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Light  $light
     * @return \Illuminate\Http\Response
     */
    public function destroy(Light $light)
    {
        return response()->json(
            $light->delete()
        );
    }

    /**
     * @param int $roomId
     * @return \Illuminate\Http\JsonResponse
     */
    public function getByRoom(int $roomId)
    {
        return response()->json(
            Light::where('room_id', $roomId)->get()
        );
    }
}
