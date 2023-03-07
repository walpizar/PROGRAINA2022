import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";

const myListModuleMaterial=[
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
];


@NgModule({
imports:[...myListModuleMaterial],
exports:[...myListModuleMaterial]
})
export class MaterialModule{}