import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { WelcomeComponent } from './views/welcome/welcome.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'unidad', loadChildren: () => import('./views/unidadp/unidadp.module').then(m => m.UnidadpModule)},
  {path: 'inventario', loadChildren: () => import('./views/inventario-ali/inventarioali.module').then(m => m.InventarioaliModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
