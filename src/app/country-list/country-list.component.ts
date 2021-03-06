import { Component, OnInit } from '@angular/core';
//import {ApiKeySettingComponent} from '../api-key-setting/api-key-setting.component'
import {IndexedDBService} from '../indexed-db.service'
import {CountryList} from '../models'
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  apiKeyIsSet = true;
  countryListTable
  constructor(private indexDB: IndexedDBService) { }
  countryListArray = [];

  ngOnInit() {
    //let apiKey = this.indexDB.getApiKey();
    //console.log(apiKey, 'hello');
    this.countryListTable = this.indexDB.getCountryListTable();
    const countryListArray: CountryList[] = this.countryListTable.toArray().then ( result => {
      console.log('myarray', result)
      for (let item of result) {
        this.countryListArray.push(item.name);
      }
    })
    console.log(countryListArray, '<-----------------------------------');
  }

  toggleSetApiKey() {
    this.apiKeyIsSet = !this.apiKeyIsSet;
  }

}
