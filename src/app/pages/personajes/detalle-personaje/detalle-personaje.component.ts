import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonajeModel } from 'src/app/shared/models/personajesModel';
import { PersonajesService } from 'src/app/shared/services/personajes.service';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.css']
})
export class DetallePersonajeComponent implements OnInit {


  personaje:PersonajeModel;
  constructor(route: ActivatedRoute, srv:PersonajesService) { 

    const id= route.snapshot.paramMap.get('id');  
    srv.getPersonajeById(id).subscribe((result:any)=>{

      this.personaje=result;
      



    });




  }

  ngOnInit(): void {
  }

}
