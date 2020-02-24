import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Room } from './../../interfaces/room/room';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  room: Room;
  url: string = 'dashboard/rooms';

  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(environment.api + this.url);
  }

  addRoom(room: Room) {
    return this.http.post<Room>(environment.api + this.url, room);
  }
 
  updateRoom(room: Room) {
    return this.http.put<Room>(environment.api + this.url + `/${room.id}`, room);
  }

  deleteRoom(room: Room) {
    return this.http.delete<Room>(environment.api + this.url + `/${room.id}`);
  }

}
