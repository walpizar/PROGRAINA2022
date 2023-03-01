import { Component, OnInit } from '@angular/core';
import { CambioDolar } from 'src/app/shared/Models/cambioDolar';
import { CambiodolarService } from 'src/app/shared/services/cambiodolar.service';



@Component({
  selector: 'app-cambio-dolar',
  templateUrl: './cambio-dolar.component.html',
  styleUrls: ['./cambio-dolar.component.css']
})
export class CambioDolarComponent {

  datoCambio:CambioDolar;

  constructor(private cambiosDolarSrv:CambiodolarService) { 
// fat arrow
    this.cambiosDolarSrv.getCambios().subscribe((datos:CambioDolar)=>{
      this.datoCambio=datos;
      console.log(this.datoCambio);
    });
  }

}
