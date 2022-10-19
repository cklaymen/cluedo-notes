import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-players-list",
  templateUrl: "./players-list.component.html",
  styleUrls: ["./players-list.component.scss"],
})
export class PlayersListComponent implements OnInit {
  constructor() {}

  @Output() addPlayerName = new EventEmitter<string>();
  @Output() removePlayer = new EventEmitter<number>();
  @Input() players: string[];

  playerName = "";

  ngOnInit(): void {}

  onSubmit() {
    this.addPlayerName.emit(this.playerName);
    this.playerName = "";
  }
}
