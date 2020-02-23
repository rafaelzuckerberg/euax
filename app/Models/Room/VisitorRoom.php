<?php

namespace App\Models\Room;

use Illuminate\Database\Eloquent\Model;

class VisitorRoom extends Model
{
    public $timestamps = false; 

    protected $fillable = [
        'user_id', 'room_id', 'checkin', 'checkout'	
    ];
}
