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

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function room()
    {
        return $this->belongsTo(Room::class);
    }
}
