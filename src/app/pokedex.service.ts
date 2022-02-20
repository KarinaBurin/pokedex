import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PokedexService {
  emitirChangeToogle = new EventEmitter<boolean>();

  check = true;
  pokemons:  any = [];

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }

   async carregarPokemons() {
    const requisicao =  await this.httpClient.get<any>("https://pokeapi.co/api/v2/pokemon?limit=500").toPromise();
    this.pokemons = requisicao.results;
  }



}
