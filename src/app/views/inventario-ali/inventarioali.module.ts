import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioaliRoutingModule } from './inventarioali-routing.module';
import { RegistrarEntradaComponent } from './registrar-entrada/registrar-entrada.component';
import { RegistrarSalidaComponent } from './registrar-salida/registrar-salida.component';


@NgModule({
  declarations: [
    RegistrarEntradaComponent,
    RegistrarSalidaComponent,

  ],
  imports: [
    CommonModule,
    InventarioaliRoutingModule
  ]
})
export class InventarioaliModule { }
