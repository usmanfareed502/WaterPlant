import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatadetailsComponent } from './datadetails.component';

describe('DatadetailsComponent', () => {
  let component: DatadetailsComponent;
  let fixture: ComponentFixture<DatadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatadetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
