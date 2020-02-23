<?php

namespace App\Models\Project;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    public $timestamps = false;
    
    protected $fillable = [
        'activity_name', 'begin_date', 'end_date', 'finished', 'project_id'
    ];
}
