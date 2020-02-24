import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { ListRoomsComponent } from './list-rooms/list-rooms.component';
import { CreateEditRoomComponent } from './create-edit-room/create-edit-room.component';
import { DetailsRoomComponent } from './details-room/details-room.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListRoomsComponent, 
    CreateEditRoomComponent, 
    DetailsRoomComponent],
  imports: [
    CommonModule,
    SharedModule,
    RoomRoutingModule
  ],
  entryComponents: [
    CreateEditRoomComponent
  ]
})
export class RoomModule { }
