<?php

namespace App\Http\Controllers;

use App\InformationTypes;
use Illuminate\Http\Request;

class InformationTypesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            InformationTypes::all()
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\InformationTypes  $informationTypes
     * @return \Illuminate\Http\Response
     */
    public function show(InformationTypes $informationTypes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\InformationTypes  $informationTypes
     * @return \Illuminate\Http\Response
     */
    public function edit(InformationTypes $informationTypes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\InformationTypes  $informationTypes
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, InformationTypes $informationTypes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\InformationTypes  $informationTypes
     * @return \Illuminate\Http\Response
     */
    public function destroy(InformationTypes $informationTypes)
    {
        //
    }
}
