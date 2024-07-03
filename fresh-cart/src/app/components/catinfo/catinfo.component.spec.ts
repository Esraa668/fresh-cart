import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatinfoComponent } from './catinfo.component';

describe('CatinfoComponent', () => {
  let component: CatinfoComponent;
  let fixture: ComponentFixture<CatinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CatinfoComponent]
    });
    fixture = TestBed.createComponent(CatinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
