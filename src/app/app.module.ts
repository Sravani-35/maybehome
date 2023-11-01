import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BottomComponent } from './bottom/bottom.component';
import { YoutubepageComponent } from './youtubepage/youtubepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BottomComponent,
    YoutubepageComponent,
    ContactpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
