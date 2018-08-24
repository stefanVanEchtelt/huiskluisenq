<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'floor_id',
        'name',
        'square_meter'
    ];
}
