<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class House extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'user_id'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function floors() {
        return $this->hasMany(Floor::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function outsideDevices() {
        return $this->hasMany(OutsideDevice::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function outsideLights() {
        return $this->hasMany(OutsideLight::class);
    }
}
