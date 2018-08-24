<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'room_id',
        'name',
        'amount',
        'type_id',
        'sort'
    ];
}
