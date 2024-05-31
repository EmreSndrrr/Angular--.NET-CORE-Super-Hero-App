import { Component } from '@angular/core';
import { SuperHero } from './models/super';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Super.UI';
  baseUrl="https://localhost:7013/api/SuperHero"
  heroes: SuperHero[] = [];
  heroToEdit?:SuperHero;

  constructor(private superHeroService:SuperHeroService) {
    
  }
  ngOnInit():void{
    this.superHeroService.getSuperHeroes()
    .subscribe(
      (result : SuperHero[]) => (this.heroes = result));
  }
  updateHeroList(heroes:SuperHero[]){
    this.heroes = heroes
  }

  initNewHero(){
    this.heroToEdit = new SuperHero();
  }
  editHero(hero:SuperHero){
    this.heroToEdit = hero
  }
}
