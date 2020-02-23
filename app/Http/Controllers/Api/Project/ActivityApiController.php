<?php

namespace App\Http\Controllers\Api\Project;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ActivityApiController extends Controller
{
    
    public function index()
    {
        return reponse()->json('PEgar todos os projetos');
    }

   
    public function store(Request $request)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
