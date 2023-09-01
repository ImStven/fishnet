import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioAliComponent } from './inventario-ali.component';
import { RegistrarSalidaComponent } from './registrar-salida/registrar-salida.component';
import { RegistrarEntradaComponent } from './registrar-entrada/registrar-entrada.component';

const routes: Routes = [
  {
    path: 'informe',
    component: InventarioAliComponent
  },
  {
    path: 'registrar-entrada',
    component: RegistrarEntradaComponent
  },
  {
    path: 'registrar-salida',
    component: RegistrarSalidaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioaliRoutingModule { }
