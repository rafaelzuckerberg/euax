<?php

namespace App\Models\Project;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    public $timestamps = false;
    
    protected $fillable = [
        'project_name', 'begin_date', 'end_date'
    ];
}
