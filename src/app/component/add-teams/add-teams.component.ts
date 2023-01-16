import { Component, OnInit } from '@angular/core';
import { Teams } from 'src/app/teams';
import { TeamsService } from 'src/app/services/teams.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-teams',
  templateUrl: './add-teams.component.html',
  styleUrls: ['./add-teams.component.css']
})
export class AddTeamsComponent implements OnInit{
  

  constructor(private Teamsservice:TeamsService,private router:Router) { }  
  
  teams: Teams=new Teams();  
  
  saveteamform=new FormGroup({
    sport_name: new FormControl("",[Validators.required,Validators.minLength(3)]),
    team_name: new FormControl("",[Validators.required,Validators.minLength(3)]),
    city: new FormControl("",Validators.required),
    country: new FormControl("",Validators.required)

    })

    get f(){
      return this.saveteamform.controls;
    }

    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
  
    onSubmit()
    {
      this.Teamsservice.create(this.teams).subscribe(
        data=> {
          console.log('SUCCESSFUL', data);
          this.goToTeamsLists();
        }
      );
    }
  
    goToTeamsLists()
    {
      this.router.navigate(['/teams-lists']);
    }
 }

 


