import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { ApplianceComponent } from './appliance/appliance.component';
import { PostComponent } from './post/post.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { MiscModule } from './misc/misc.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

@NgModule({
  declarations: [DashboardComponent, ApplianceComponent, PostComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    AngularFireDatabaseModule,
    FormsModule,
    SidebarModule,
    MiscModule,
    NgbModule.forRoot()
  ]
})
export class DashboardModule { }