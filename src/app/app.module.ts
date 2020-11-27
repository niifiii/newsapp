import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module'; //Add routing components
import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import { ApiKeySettingComponent } from './api-key-setting/api-key-setting.component';
import { NewsPageComponent } from './news-page/news-page.component';
//
import {ReactiveFormsModule} from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    NewsPageComponent,
    ApiKeySettingComponent, 
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
