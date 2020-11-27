import { Injectable, OnInit } from '@angular/core';
//
import {Dexie} from 'dexie'; 
import {ApiKey, CountryList, NewsArticle} from './models'

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService extends Dexie implements OnInit{

  apiKeyTable: Dexie.Table<ApiKey, number>;
  countryListTable: Dexie.Table<CountryList, number>;
  newsArticleTable: Dexie.Table<NewsArticle, number>;

  constructor(private http: HttpClient) { 
    super('NewsApiCacheDB');
    this.version(1).stores({
      apiKey: '++id',
      countryList: '++id',
      newsArticle: '++id'
    });
    this.apiKeyTable = this.table('apiKey');
    this.countryListTable = this.table('countryList');
    this.newsArticleTable = this.table('newsArticle');
  }

  //////////Api Key Table
 
  async getApiKey(): Promise<ApiKey | string> {
    const apiKeyRecord: ApiKey = await this.apiKeyTable.get(0);
    if (!!apiKeyRecord) {
      return ''
    } else {
      return apiKeyRecord;
    }
  }

  async setApiKey(apiKey): Promise<any> {
    const apiKeyRecord: ApiKey = await this.apiKeyTable.get(0);
    // changes apiKeyRecord, write update back
    apiKeyRecord.apiKey = apiKey;
    await this.apiKeyTable.put(apiKeyRecord)
  }
  

  ////////CountryListTable
  url = 'https://restcountries.eu/rest/v2/alpha?codes=';
  countrycodesArray = [ 'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk',
                  'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 
                  'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za' ]
  countrycodesString;

  ngOnInit() {
  }

  getCountryListTable() {
    this.populateCountryListTable();
    return this.countryListTable;
  }
  
  private async populateCountryListTable() {
    let restCountriesResponse: Object[] =  await this.getCountryListFromUrl();
    //console.log('populateCountryListTable', restCountriesResponse)//why is restCountriesResponse undefined? done!
    for (let index in restCountriesResponse) {
     //@ts-ignore
      await this.countryListTable.add({id:parseInt(index), country: restCountriesResponse[index].name});
      /*
      //console.log('countrylistrecord', countryListRecord);
      // changes counrtyli Record, write update back
      if ( countryListRecord === 'undefined') {
        // @ts-ignore
        const putRecord = restCountriesResponse[index].name;
        await this.countryListTable.put(putRecord);
      } // @ts-ignore
      countryListRecord.country = restCountriesResponse[index].name as string;
      await this.countryListTable.put(countryListRecord);
      */

    } //for
    await console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',this.countryListTable.toArray());
  }

  restcountriesResponse: Object[]

  private async getCountryListFromUrl(): Promise<Object[]> { 

    this.countrycodesString = this.countrycodesArray.toString();
    this.countrycodesString = this.countrycodesString.replaceAll(',', ';')

    let response = await this.httpGetCountries();
    //console.log('OIOIOIOIOOIOIOOOIOIO', response)
    return response;
/* 
    for ( let item of restcountriesResponse ) {
      //@ts-ignore    
      let countryNameList: []
      countryNameList.push({countryId: countrycodesArray[index] as string, countryName: item.name  as string});
    }
*/  //console.log('getCountryListFromUrl',this.url + this.countrycodesString, restcountriesResponse)
    // await console.log('HEREHERE', this.restcountriesResponse)
    //return null
  }

  private httpGetCountries() {
    return this.http.get(this.url + this.countrycodesString, { responseType: 'json' }).toPromise().then( (res) => {
      let restcountriesResponse = res as Object[];
      //console.log('HEREHERE', restcountriesResponse) //it works!
      return restcountriesResponse;
     });
  }

  //NewsArticleTable


};

