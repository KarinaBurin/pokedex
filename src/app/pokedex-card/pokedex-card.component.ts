import { Component, Input, SimpleChanges, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrls: ['./pokedex-card.component.css'],
})
export class PokedexCardComponent implements OnInit {
  @Input() pokemon: string = '';
  @Input() numero: any;
  toogleFundo: boolean = false;
  resultUrlImag: any;

  constructor(public pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.pergarImagem();

    this.pokedexService.emitirChangeToogle.subscribe((result) => {
      this.toogleFundo = result;
    });
  }

  pergarImagem() {
    let numeroFormatado = this.leadingZero(this.numero);
    this.resultUrlImag = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);
    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }
}
