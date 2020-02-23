<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

use App\User;
use App\Models\User\Visitor;
use App\Models\Room\VisitorRoom;


class VisitorApiController extends Controller
{
    
    public function index()
    {
        $administrators = User::select('users.id', 'users.name', 'users.email', 'users.profile', 'users.status', 'users.created_at'
                                , 'visitor_rooms.checkin', 'visitor_rooms.checkout', 'visitors.cpf', 'visitors.date_birth', 'visitor_rooms.room_id as room')
                            ->where('users.profile', 2)
                            ->join('visitor_rooms', 'visitor_rooms.user_id', 'users.id')
                            ->join('visitors', 'visitors.user_id', 'users.id')
                            ->get();
        return response()->json($administrators);
    }

    
    public function store(Request $request)
    {
        $request['profile'] = 2;
        $request['status'] = 1; 
        $rooms = VisitorRoom::select(DB::raw('count(room_id) as count'))
                            ->where('room_id', $request['room'])
                            ->get();  

        if($rooms[0]->count == 3) {
            $response = [ 'success' => false, 'message' => 'Não foi possível cadastrar visitante, sala esgotada, escolha outra!', 'status' => 401 ];  
        } else {
            $user = User::create($request->only(['id', 'name', 'email', 'profile', 'status']));

            $visitor = Visitor::create([
                'cpf'           =>  $request['cpf'], 
                'date_birth'    =>  date('Y-m-d h:i:s', strtotime($request['date_birth'])),
                'user_id'       =>  $user->id,
            ]);
    
            $room = VisitorRoom::create([
                'user_id'   =>  $user->id,
                'room_id'   =>  $request['room'],
                'checkin'   =>  date('Y-m-d h:i:s', strtotime(Carbon::now())),
                'checkout'   =>  NULL
            ]); 
    
            if($user && $visitor && $room) { 
                $response = [ 'success' => true, 'message' => 'Visitante cadastrado com sucesso!', 'status' => 200 ];  
            } else {
                $response = [ 'success' => false, 'message' => 'Não foi possível cadastrar visitante!', 'status' => 401 ];  
            }        
        }
        return response()->json($response);
    }

   

    public function update(Request $request, $id)
    {
        if(isset($id) && isset($request['checkout']) && $request['checkout'] == 1) {
            $visitor = VisitorRoom::
            where('visitor_rooms.user_id', $id)
            ->update([
                'checkout'  => date('Y/m/d H:i:s')
            ]);

            if($visitor) { 
                $response = [ 'success' => true, 'message' => 'Saída registrada com sucesso!', 'status' => 200 ];  
            } else {
                $response = [ 'success' => false, 'message' => 'Não foi possível registrar saída!', 'status' => 401 ];  
            } 
        } else { 
            
            $user = User::find($id);
            $_user = $user->update([
                'name'  =>  $request['name']
            ]);

            $visitor = Visitor::
                    where('visitors.user_id', $id)
                    ->update($request->only(['cpf', 'date_birth']));

            $room = VisitorRoom::
                where('visitor_rooms.user_id', $id)
                ->update([
                    'room_id'  => $request['room']
                ]);

            if($_user || $_user || $room) { 
                $response = [ 'success' => true, 'message' => 'Visitante alterado com sucesso!', 'status' => 200 ];  
            } else {
                $response = [ 'success' => false, 'message' => 'Não foi possível alterar visitante!', 'status' => 401 ];  
            } 
        } 
        
        return response()->json($response);
    }

 
    
    public function destroy($id)
    {
        //
    }
}
