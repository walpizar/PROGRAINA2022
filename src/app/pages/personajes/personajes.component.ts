import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PersonajeModel } from 'src/app/shared/models/personajesModel';
import { PersonajesService } from 'src/app/shared/services/personajes.service';
import {MatPaginator} from '@angular/material/paginator';
import { PersonajesModule } from './personajes.module';
import { MatTableDataSource } from '@angular/material/table';
import { InfoModel } from 'src/app/shared/models/infoModel';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit, AfterViewInit {


  info: InfoModel;
  displayedColumns: string[] = ['id', 'name', 'status', 'species','gender','image','created','actions'];
  dataSource =   new MatTableDataSource<PersonajeModel>([]);
 @ViewChild(MatPaginator) paginator: MatPaginator;
 
  
  constructor(private personajeSrv: PersonajesService) { }

  next():void{

    this.getPersonajes(this.info.next);
  }

  preview():void{

    
    
    this.getPersonajes(this.info.prev);
  }


  ngOnInit(): void {

    this.getPersonajes('https://rickandmortyapi.com/api/character');

  };


  getPersonajes(url:string){
    this.personajeSrv.getPersonajes(url).subscribe((data:any)=>{
      // console.log(data);
      const {info,results}= data;    
      this.dataSource= results;
      this.info=info;
      console.log(this.info);

    });
  }

 

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}
