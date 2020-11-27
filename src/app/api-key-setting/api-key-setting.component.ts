import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-api-key-setting',
  templateUrl: './api-key-setting.component.html',
  styleUrls: ['./api-key-setting.component.css']
})
export class ApiKeySettingComponent implements OnInit {

  apiKey: string = '';
  apiKeyForm: FormGroup = new FormGroup({
    apiKey: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  addApiKey() {
    this.apiKey = this.apiKeyForm.get('apiKey').value; //.value exrtracts the string fromABstractCtrl
  }



}
