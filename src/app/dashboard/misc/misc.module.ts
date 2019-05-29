import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestTrashComponent } from './guest-trash/guest-trash.component';
import { MiscComponent } from './misc.component';
import { MeetingComponent } from './meeting/meeting.component';

@NgModule({
  declarations: [MiscComponent, GuestTrashComponent, MeetingComponent],
  exports: [MiscComponent],
  imports: [
    CommonModule
  ]
})
export class MiscModule { }
