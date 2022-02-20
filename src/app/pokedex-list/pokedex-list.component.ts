import { Component, OnInit, Input } from '@angular/core';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.css'],
})
export class PokedexListComponent implements OnInit {
  public paginaAtual: number = 1;
  count = 1126;

  constructor(public pokedexService: PokedexService) {}

  ngOnInit(): void {}
}
