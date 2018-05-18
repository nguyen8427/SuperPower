import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { BatmanComponent } from './power/batman/batman.component';
import { IronmanComponent } from './power/ironman/ironman.component';
import { DeadpoolComponent } from './power/deadpool/deadpool.component';
import { ThorComponent } from './power/thor/thor.component';


@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    BatmanComponent,
    IronmanComponent,
    DeadpoolComponent,
    ThorComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
