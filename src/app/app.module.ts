import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { InventarioAliComponent } from './views/inventario-ali/inventario-ali.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HomeComponent,
    SidenavComponent,
    WelcomeComponent,
    InventarioAliComponent,
    SublevelMenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
