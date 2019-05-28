import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [DashboardComponent, SidebarComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    AngularFireDatabaseModule,
    FormsModule
  ]
})
export class DashboardModule { }