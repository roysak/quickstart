import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MainSection }  from './main.section.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MainSection ],
  bootstrap:    [ AppComponent, MainSection ]
})
export class AppModule { }
