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
        $administrators = User::all();
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
            return response()->json([ 'success' => true, 'message' => 'Administrador cadastrado com sucesso!'], 200);
        } else {
            return response()->json([ 'success' => false, 'message' => 'Não foi possível cadastrar administrador!'], 401);
        }
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
            return response()->json([ 'success' => true, 'message' => 'Administrador atualizado com sucesso!'], 200);
        } else {
            return response()->json([ 'success' => false, 'message' => 'Não foi possível atualizar administrador!'], 401);
        }
    }

    
    public function destroy($id)
    {
        $user = User::find($id);

        $delete = $user->delete();

        if($delete) {
            return response()->json([ 'success' => true, 'message' => 'Administrador deletado com sucesso!'], 200);
        } else {
            return response()->json([ 'success' => false, 'message' => 'Não foi possível deletar administrador!'], 401);
        }
    }
}
