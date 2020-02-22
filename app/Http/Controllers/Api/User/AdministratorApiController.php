<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;

use App\User;

class AdministratorApiController extends Controller
{
    
    
    public function index()
    {
        $administrators = User::select()
                        ->where('users.profile', 1)
                        ->get();
        return response()->json($administrators);
    }

    
    public function store(Request $request)
    {
        if(isset($request['password'])) {
            $request['password'] = Hash::make('123456');
        } else {
            unset($request['password']);
        }

        $user = User::create([
            'name'      =>      $request['name'],
            'email'     =>      $request['email'],
            'password'  =>      $request['password'],
            'profile'   =>      1,
            'status'    =>      1,
        ]);

        if($user) { 
            $response = [ 'success' => true, 'message' => 'Administrador cadastrado com sucesso!', 'status' => 200 ];
        } else {
            $response = [ 'success' => false, 'message' => 'Não foi possível cadastrar administrador!', 'status' => 401 ]; 
        }
        return response()->json($response);
    }

    
    public function update(Request $request, $id)
    {
        if(isset($request['password'])) {
            $request['password'] = $request['password'];
        } else {
            unset($request['password']);
        }

        $user = User::find($id);
        $update = User::where('id', $user->id)
            ->update([
                'name'  =>  $request['name']
            ]);  

        if($update) { 
            $response = [ 'success' => true, 'message' => 'Administrador atualizado com sucesso', 'status' => 200 ];
        } else {
            $response = [ 'success' => false, 'message' => 'Não foi possível atualizar administrador!', 'status' => 401 ]; 
        }
        return response()->json($response);
    }

    
    public function destroy($id)
    {
        $user = User::find($id);

        $delete = $user->delete(); 

        if($delete) { 
            $response = [ 'success' => true, 'message' => 'Administrador deletado com sucesso', 'status' => 200 ];
        } else {
            $response = [ 'success' => false, 'message' => 'Não foi possível deletar administrador!', 'status' => 401 ]; 
        }
        return response()->json($response);
    }
}
