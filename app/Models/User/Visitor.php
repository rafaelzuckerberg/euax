<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Model;

class Visitor extends Model
{
    public $timestamps = false;
    
    protected $fillable = [
        'cpf', 'date_birth', 'user_id'
    ];
}