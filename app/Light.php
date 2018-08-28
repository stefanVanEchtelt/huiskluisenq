<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Light extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'room_id',
        'name',
        'amount',
    ];
}
