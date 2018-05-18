import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-batman',
  templateUrl: './batman.component.html',
  styleUrls: ['./batman.component.css']
})
export class BatmanComponent implements OnInit {
  @Input() level;
  newLevel;


  ngOnChanges(){
    this.newLevel = this.level * 50;
  }

  constructor() { }

  ngOnInit() {
  }

}
