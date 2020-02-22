<?php

namespace App\Models\Room;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    public $timestamps = false; 

    protected $fillable = [
        'name'
    ];
}
