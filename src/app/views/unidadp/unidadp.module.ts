import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnidadpRoutingModule } from './unidadp-routing.module';
import { AddunidadpComponent } from './addunidadp/addunidadp.component';
import { RegistropesComponent } from './registropes/registropes.component';
import { UnidadpComponent } from './unidadp.component';


@NgModule({
  declarations: [
    AddunidadpComponent,
    RegistropesComponent,
    UnidadpComponent
  ],
  imports: [
    CommonModule,
    UnidadpRoutingModule
  ]
})
export class UnidadpModule { }
