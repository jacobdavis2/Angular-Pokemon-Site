import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private httpService: HttpClient) { }

  getPokemonByName(name: string): Observable<Pokemon> {
    return this.httpService.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  }
}
