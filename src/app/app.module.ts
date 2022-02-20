import { MatNativeDateModule } from '@angular/material/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { PokedexTopoComponent } from './pokedex-topo/pokedex-topo.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokedexCardComponent } from './pokedex-card/pokedex-card.component';
import { PokedexService } from './pokedex.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    PokedexTopoComponent,
    PokedexListComponent,
    PokedexCardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialExampleModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgxPaginationModule 
  ],
  providers: [PokedexService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
