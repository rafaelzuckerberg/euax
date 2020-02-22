<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Model;

class Visitor extends Model
{
    protected $fillable = [
        'cpf', 'date_birth'
    ];
}