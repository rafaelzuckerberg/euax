<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

use App\User;
use App\Models\User\Visitor;
use App\Models\Room\VisitorRoom;


class VisitorApiController extends Controller
{
    
    public function index()
    {
        $administrators = User::select('users.id', 'users.name', 'users.email', 'users.profile', 'users.status')
                            ->where('users.profile', 2)
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
            ]); 
    
            if($user && $visitor && $room) { 
                $response = [ 'success' => true, 'message' => 'Visitante cadastrado com sucesso!', 'status' => 200 ];  
            } else {
                $response = [ 'success' => false, 'message' => 'Não foi possível cadastrar visitante!', 'status' => 401 ];  
            }        
        }
        return response()->json($response);
    }

   
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
