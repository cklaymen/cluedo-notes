import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss']
})
export class GameTableComponent implements OnInit {

  @Input() columns: string[];
  @Input() rows: string[];

  constructor() { }

  ngOnInit(): void {

  }

}
