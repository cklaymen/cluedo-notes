import { Component } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "cluedo-notes";
  game: ReturnType<DataService["getData"]>;
  selectedGame: number;
  gameNames: string[];
  players: string[];

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.gameNames = this.dataService.getGameNames();
    this.players = [];
  }

  setGame(gameIndex: number) {
    this.game = this.dataService.getData(gameIndex);
  }

  addPlayerName(playerName: string) {
    this.players.push(playerName);
  }

  removePlayer(index: number) {
    this.players.splice(index, 1);
  }
}
