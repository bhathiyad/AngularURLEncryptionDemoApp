import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingComponent } from './meeting/meeting.component';
import { CircularComponent } from './circular/circular.component';

const routes: Routes = [{path:'viewmeetings', component:MeetingComponent},
                        {path:'viewcirculars', component:CircularComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
