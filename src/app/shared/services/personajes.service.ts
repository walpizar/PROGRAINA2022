import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonajeModel } from '../models/personajesModel';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
personajes:PersonajeModel[]=[];
  constructor(private http: HttpClient) { }

getPersonajes(url:string):Observable<any>{
  return this.http.get(url);
  
}


getPersonajeById(id:any):Observable<PersonajeModel>{

  return this.http.get<PersonajeModel>('https://rickandmortyapi.com/api/character/'+id);

}

}


