import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiKeySettingComponent } from './api-key-setting.component';

describe('ApiKeySettingComponent', () => {
  let component: ApiKeySettingComponent;
  let fixture: ComponentFixture<ApiKeySettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiKeySettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiKeySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
