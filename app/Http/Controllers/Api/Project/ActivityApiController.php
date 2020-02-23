<?php

namespace App\Http\Controllers\Api\Project;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Project\Activity;

class ActivityApiController extends Controller
{
    
    public function index()
    {
        $activities = Activity::select('activities.id', 'activities.activity_name', 'activities.begin_date as activity_begin_name', 'activities.end_date as activity_end_name', 'activities.finished'
                        , 'projects.id as project_id', 'projects.project_name', 'projects.begin_date', 'projects.end_date')
                        ->join('projects', 'projects.id', 'activities.project_id')
                        ->get();
        return response()->json($activities);
    }

   
    public function store(Request $request)
    {
        $request['begin_date'] = date('Y-m-d H:i:s', strtotime($request['begin_date'])); 
        $request['end_date'] = date('Y-m-d H:i:s', strtotime($request['end_date'])); 
        $request['finished'] = 0; 

        $activity = Activity::create($request->all());

        if($activity) { 
            $response = [ 'success' => true, 'message' => 'Atividade cadastrado com sucesso!', 'status' => 200 ];
        } else {
            $response = [ 'success' => false, 'message' => 'Não foi possível cadastrar atividade!', 'status' => 401 ]; 
        }
        return response()->json($response); 
    }


    public function update(Request $request, $id)
    {
        $request['begin_date'] = date('Y-m-d H:i:s', strtotime($request['begin_date'])); 
        $request['end_date'] = date('Y-m-d H:i:s', strtotime($request['end_date'])); 
        $activity = Activity::where('id', $id)
                    ->update($request->all());

        if($activity) { 
            $response = [ 'success' => true, 'message' => 'Atividade alterado com sucesso!', 'status' => 200 ];
        } else {
            $response = [ 'success' => false, 'message' => 'Não foi possível alterar atividade!', 'status' => 401 ]; 
        }
        return response()->json($response);
    }


    public function destroy($id)
    {
        $activity = Activity::find($id);

        if($activity->delete()) { 
            $response = [ 'success' => true, 'message' => 'Atividade deletada com sucesso!', 'status' => 200 ];
        } else {
            $response = [ 'success' => false, 'message' => 'Não foi possível deletar atividade!', 'status' => 401 ]; 
        }
        return response()->json($response);
    }
}
