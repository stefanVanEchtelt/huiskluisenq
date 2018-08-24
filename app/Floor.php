<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Floor extends Model
{

    /**
     * @var array
     */
    protected $fillable = [
        'house_id',
        'sort'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function rooms()
    {
        return $this->hasMany(Room::class);
    }
}
