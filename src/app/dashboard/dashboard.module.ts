import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ApplianceComponent } from './appliance/appliance.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [DashboardComponent, SidebarComponent, ApplianceComponent, PostComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    AngularFireDatabaseModule,
    FormsModule
  ]
})
export class DashboardModule { }