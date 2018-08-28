<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Radiator extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'room_id',
        'name',
        'length',
    ];
}
