import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import
import {CountryListComponent} from './country-list/country-list.component';
import {NewsPageComponent} from './news-page/news-page.component'

const routes: Routes = [
  {path: '', redirectTo:'/countrylist', pathMatch:'full'},
  {path: 'countrylist', component: CountryListComponent},
  {path: 'newspage', component: NewsPageComponent},
  {path: '**', redirectTo:'/countrylist', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents = [ CountryListComponent, NewsPageComponent];
