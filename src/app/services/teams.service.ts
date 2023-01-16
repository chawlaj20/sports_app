import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teams } from '../teams';


const baseUrl = 'http://localhost:8080/api/'; 
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}; 

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }


  getAllTeams(): Observable<Teams[]>
{
  return this.http.get<Teams[]>(baseUrl+ 'getAllTeams', httpOptions);
}

create(teams: Teams): Observable<Teams>
{
  return this.http.post<Teams>(baseUrl+ 'create',teams,httpOptions);
}

deleteTeam(id: number): Observable<Object>
{
  return this.http.delete(`${baseUrl+'deleteTeam'}/${id}`);
}

}
