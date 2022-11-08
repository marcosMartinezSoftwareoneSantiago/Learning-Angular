import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FooterComponent } from './components/footer/footer.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { LegalPagesComponent } from './components/legal-pages/legal-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    BuscadorComponent,
    FooterComponent,
    RedesSocialesComponent,
    LegalPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
