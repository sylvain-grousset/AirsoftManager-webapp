import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogInscriptionComponent } from './dialog-inscription/dialog-inscription.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SessionCardComponent } from './session-card/session-card.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogInscriptionComponent,
    NavbarComponent,
    SessionCardComponent,
    InscriptionComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
