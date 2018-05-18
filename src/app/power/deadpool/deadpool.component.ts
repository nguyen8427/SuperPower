import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-deadpool',
  templateUrl: './deadpool.component.html',
  styleUrls: ['./deadpool.component.css']
})
export class DeadpoolComponent implements OnInit, OnChanges {
  @Input() level;
  newLevel;


  ngOnChanges(){
    this.newLevel = this.level * 100;
  }

  constructor() { }

  ngOnInit() {
  }

}
