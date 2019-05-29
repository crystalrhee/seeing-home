import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskListComponent],
  exports: [TaskListComponent],
  imports: [
    CommonModule,
    AngularFireDatabaseModule,
    FormsModule
  ]
})
export class TaskModule { }
