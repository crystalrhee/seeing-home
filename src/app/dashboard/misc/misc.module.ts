import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestTrashComponent } from './guest-trash/guest-trash.component';
import { MiscComponent } from './misc.component';
import { RentComponent } from './rent/rent.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 

@NgModule({
  declarations: [MiscComponent, GuestTrashComponent, RentComponent],
  exports: [MiscComponent],
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ]
})
export class MiscModule { }
