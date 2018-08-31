<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OutsideLight extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'house_id',
        'name',
        'amount',
    ];
}
