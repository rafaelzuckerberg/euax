<?php

namespace App\Http\Controllers\Api\Project;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Project\Project;


class ProjectApiController extends Controller
{
    
    public function index()
    {
        $projects = Project::select()
                        ->get();
        return response()->json($projects);
    }

    
    public function store(Request $request)
    {
        $request['begin_date'] = date('Y-m-d H:i:s', strtotime($request['begin_date'])); 
        $request['end_date'] = date('Y-m-d H:i:s', strtotime($request['end_date'])); 
        $project = Project::create($request->all());

        if($project) { 
            $response = [ 'success' => true, 'message' => 'Projeto cadastrado com sucesso!', 'status' => 200 ];
        } else {
            $response = [ 'success' => false, 'message' => 'Não foi possível cadastrar projeto!', 'status' => 401 ]; 
        }
        return response()->json($response);
    }


    public function update(Request $request, $id)
    {
        $request['begin_date'] = date('Y-m-d H:i:s', strtotime($request['begin_date'])); 
        $request['end_date'] = date('Y-m-d H:i:s', strtotime($request['end_date'])); 
        $project = Project::where('id', $id)
                    ->update($request->all());

        if($project) { 
            $response = [ 'success' => true, 'message' => 'Projeto alterado com sucesso!', 'status' => 200 ];
        } else {
            $response = [ 'success' => false, 'message' => 'Não foi possível alterar projeto!', 'status' => 401 ]; 
        }
        return response()->json($response);
    }

 
    public function destroy($id)
    {
        //
    }
}
