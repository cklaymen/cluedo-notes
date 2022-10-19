import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cluedo-notes';
  game: ReturnType<DataService['getData']>;
  selectedGame: number;
  gameNames: string[];
  players: string[];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.gameNames = this.dataService.getGameNames();
    this.players = [ "Ryszard", "Katarzyna", "Szymon"];
  }

  setGame(gameIndex: number) {
    this.game = this.dataService.getData(gameIndex);
  }
}
