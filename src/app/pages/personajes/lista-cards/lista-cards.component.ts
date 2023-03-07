import { Component, OnInit } from '@angular/core';
import { InfoModel } from 'src/app/shared/models/infoModel';
import {take} from 'rxjs/operators';
import { PersonajeModel } from 'src/app/shared/models/personajesModel';
import { PersonajesService } from 'src/app/shared/services/personajes.service';

@Component({
  selector: 'app-lista-cards',
  templateUrl: './lista-cards.component.html',
  styleUrls: ['./lista-cards.component.css']
})
export class ListaCardsComponent implements OnInit {

  lista:PersonajeModel[]=[];
  info: InfoModel;

  constructor(private personajeSrv: PersonajesService) { }

  ngOnInit(): void {
    this.getPersonajes('https://rickandmortyapi.com/api/character');
  }
  next():void{
    this.getPersonajes(this.info?.next);
  }

  preview():void{    
    this.getPersonajes(this.info?.prev);
  }

  getPersonajes(url:string){
    this.personajeSrv.getPersonajes(url).pipe(take(1)).subscribe((data:any)=>{

      this.lista=[];
      const {info,results}= data;
      this.lista= [...this.lista,...results];
      this.info=info;
 
    });
  }


}
