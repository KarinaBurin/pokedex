import { Component, OnInit, Input } from '@angular/core';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.css'],
})
export class PokedexListComponent implements OnInit {
  public paginaAtual: number = 1;
  itemsPerPage: number = 14;
  count = 1126;

  constructor(public pokedexService: PokedexService) {}

  ngOnInit(): void {
    // this.absoluteIndex(indexAtual: any);
  }

  // absoluteIndex (indexOnPage:number): number { 
  //   return  this.itemsPerPage  *  (this.paginaAtual  -  1)  +  indexOnPage ; 
  // }

  // carregarListaPokemonIndex(){
  //   for (let index = 1; index <= this.count; index++) {
  //     // this.totalIndex = this.pokedexService.pokemons[index];

  //     this.totalIndex.push(index)
  //     // console.log(this.totalIndex)
  //   }
  // }
}
