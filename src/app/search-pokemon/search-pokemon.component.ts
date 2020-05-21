import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeapiService } from '../pokeapi-service.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {

  pokemon: Pokemon = {
    name: "",
    sprites: {
      front_default: ""
    }
  };

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.pokeapiService.getPokemonByName(this.pokemon.name).subscribe( res => this.pokemon = res);
  }

}
