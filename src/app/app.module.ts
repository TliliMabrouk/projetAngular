import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';

import { PposteComponent } from './pposte/pposte.component';

@NgModule({
  declarations: [
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    PposteComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
