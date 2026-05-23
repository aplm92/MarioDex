import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NuevoPersonajeComponent } from './features/mario/NuevoPersonajeComponent/NuevoPersonaje.component';
import { MarioService } from './core/mario.service';
import { MarioDexPageComponent } from './features/mario/MarioDexPageComponent/MarioDexPage.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoPersonajeComponent,
    MarioDexPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

