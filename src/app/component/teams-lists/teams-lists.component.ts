import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service'
import { Teams } from 'src/app/teams'; 

@Component({
  selector: 'app-teams-lists',
  templateUrl: './teams-lists.component.html',
  styleUrls: ['./teams-lists.component.css']
})
export class TeamsListsComponent implements OnInit{

  constructor(private teamsService:TeamsService,private router: Router){}

  teams: Teams[] | undefined;
 
  ngOnInit(): void {
    this.getTeams();
  }

  private getTeams()
  {
    this.teamsService.getAllTeams().subscribe(
      data=>{
        this.teams=data;
      }
    );
  }

  deleteTeam(team_id: number)
  {
    this.teamsService.deleteTeam(team_id).subscribe(
      data=>
      {
        console.log(data);
        window.location.reload();
      }
    );
  }

  
  }
  
  

  

  
  
  
 
  
   
   
