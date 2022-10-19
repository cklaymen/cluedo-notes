import { Component, OnInit } from "@angular/core";
import { Status } from "./status";

@Component({
  selector: "app-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.scss"],
})
export class StatusComponent implements OnInit {
  status: Status;

  constructor() {}

  ngOnInit(): void {
    this.status = Status.NO_DATA;
  }

  getName(): string {
    return Status[this.status];
  }

  change(): void {
    let newStatus: Status;

    switch (this.status) {
      case Status.NO_DATA:
        newStatus = Status.MAYBE_HAVE;
        break;

      case Status.MAYBE_HAVE:
        newStatus = Status.HAVE;
        break;

      case Status.HAVE:
        newStatus = Status.DO_NOT_HAVE;
        break;

      case Status.DO_NOT_HAVE:
      default:
        newStatus = Status.NO_DATA;
        break;
    }

    this.status = newStatus;
  }
}
