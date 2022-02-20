import { PokedexService } from './../pokedex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex-topo',
  templateUrl: './pokedex-topo.component.html',
  styleUrls: ['./pokedex-topo.component.css'],
})
export class PokedexTopoComponent implements OnInit {
  cor: string = 'Card Escuro';
  isChecked = true;

  constructor(public pokedexService: PokedexService) {}

  ngOnInit(): void {}

  changeToogle() {
    if (this.isChecked) {
      this.cor = 'Card Claro';
      this.pokedexService.emitirChangeToogle.emit(this.isChecked);
      this.isChecked = false;
    } else {
      this.cor = 'Card Escuro';
      this.pokedexService.emitirChangeToogle.emit(this.isChecked);
    }
  }
}
