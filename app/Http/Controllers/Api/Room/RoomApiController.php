<?php

namespace App\Http\Controllers\Api\Room;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\Room\Room;

class RoomApiController extends Controller
{
    
    public function index()
    {
        $rooms = Room::select('rooms.id', 'rooms.name', DB::raw("(SELECT COUNT(*)
        FROM visitor_rooms 
            WHERE room_id = rooms.id 
                GROUP BY room_id) as quantidade"))  
                        ->get();
        return response()->json($rooms);
    }

    
    public function store(Request $request)
    {
        $room = Room::create([
            'name'  =>  $request['name']
        ]);

        if($room) {
            return response()->json([ 'success' => true, 'message' => 'Sala cadastrado com sucesso!'], 200);
        } else {
            return response()->json([ 'success' => false, 'message' => 'Não foi possível cadastrar sala!'], 401);
        }
    }


    public function update(Request $request, $id)
    {
        $room = Room::find($id);
        $update = Room::where('id', $room->id)
            ->update([
                'name'  =>  $request['name']
            ]);

        if($update) {
            return response()->json([ 'success' => true, 'message' => 'Sala atualizado com sucesso!'], 200);
        } else {
            return response()->json([ 'success' => false, 'message' => 'Não foi possível atualizar sala!'], 401);
        }
    }


    public function destroy($id)
    {
        //
    }
}
