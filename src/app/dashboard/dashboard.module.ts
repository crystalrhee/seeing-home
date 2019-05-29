import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { ApplianceComponent } from './appliance/appliance.component';
import { PostComponent } from './post/post.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { RentComponent } from './rent/rent.component';
import { MiscModule } from './misc/misc.module';

@NgModule({
  declarations: [DashboardComponent, ApplianceComponent, PostComponent, RentComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    AngularFireDatabaseModule,
    FormsModule,
    SidebarModule,
    MiscModule
  ]
})
export class DashboardModule { }