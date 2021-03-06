import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {

 // heroes = HEROES;
  heroes: Hero[];

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    console.log("hero  ->changing html save without stash and then commit, for git stash sake chek 2",hero);
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }


  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

 ngOnInit() {
  this.getHeroes();
}

}
