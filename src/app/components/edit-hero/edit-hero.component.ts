import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/super';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent {
@Input() hero? : SuperHero
@Output () heroesUpdated = new EventEmitter<SuperHero[]>();
  constructor(private superHeroService : SuperHeroService) {
    
  }

  ngOnInit():void{

  }

  updateHero(hero:SuperHero){
    this.superHeroService.updateHeroes(hero)
    .subscribe((heroes:SuperHero[]) => this.heroesUpdated.emit(heroes));
  }
  deleteHero(hero:SuperHero){
    this.superHeroService.deleteHeroes(hero)
    .subscribe((heroes:SuperHero[]) => this.heroesUpdated.emit(heroes));
  }
  createHero(hero:SuperHero){
    this.superHeroService.createHeroes(hero)
    .subscribe((heroes:SuperHero[]) => this.heroesUpdated.emit(heroes));
  }
}
