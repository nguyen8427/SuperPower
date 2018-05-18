import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-thor",
  templateUrl: "./thor.component.html",
  styleUrls: ["./thor.component.css"]
})
export class ThorComponent implements OnInit {
  @Input() level;
  newLevel;

  ngOnChanges() {
    this.newLevel = this.level * 250;
  }
  constructor() {}

  ngOnInit() {}
}
