import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-ironman",
  templateUrl: "./ironman.component.html",
  styleUrls: ["./ironman.component.css"]
})
export class IronmanComponent implements OnInit {
  @Input() level;
  newLevel;

  ngOnChanges() {
    this.newLevel = this.level * 150;
  }
  constructor() {}

  ngOnInit() {}
}
