import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  api="https://localhost:7013/api";
  url="SuperHero"
  constructor(private http : HttpClient) { }


  public getSuperHeroes() : Observable<SuperHero[]>{
  return this.http.get<SuperHero[]>(`${this.api}/${this.url}`);
  }
  public updateHeroes(hero: SuperHero) : Observable<SuperHero[]>{
    return this.http.put<SuperHero[]>(`${this.api}/${this.url}`,hero);
  }

  public createHeroes(hero: SuperHero) : Observable<SuperHero[]>{
    return this.http.post<SuperHero[]>(`${this.api}/${this.url}`,hero);
  }
  public deleteHeroes(hero : SuperHero) : Observable<SuperHero[]>{
    return this.http.delete<SuperHero[]>(`${this.api}/${this.url}/${hero.id}`);
    }
}
