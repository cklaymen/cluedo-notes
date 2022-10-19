import { Injectable } from '@angular/core';
import dataJson from './data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  getData(gameIndex: number) {
    return dataJson[gameIndex];
  }

  getGameNames() {
    return dataJson.map(it => it.name);
  }
}
