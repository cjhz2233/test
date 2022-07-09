import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './Hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: '山丘之王' },
  { id: 13, name: '血魔法师' },
  { id: 14, name: '影魔' },
  { id: 15, name: '暗夜猎手' },
  { id: 16, name: '月之女祭司' },
  { id: 17, name: '矮人火枪手' },
  { id: 18, name: '恶魔猎手' },
  { id: 19, name: '卡尔' },
  { id: 20, name: '驯兽师' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}