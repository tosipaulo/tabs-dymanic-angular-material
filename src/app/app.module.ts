import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { TabsModule } from './tabs/tabs.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Component01Component } from './component01/component01.component';
import { Component02Component } from './component02/component02.component';

@NgModule({
  declarations: [
    AppComponent,
    Component01Component,
    Component02Component
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    TabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
