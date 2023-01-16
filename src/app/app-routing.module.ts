import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsListsComponent } from './component/teams-lists/teams-lists.component';
import { AddTeamsComponent } from './component/add-teams/add-teams.component';

const routes: Routes = [
  {path:'teams-lists', component: TeamsListsComponent},
  {path: 'addteams', component: AddTeamsComponent},
  {path: '', redirectTo: '/teams', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
