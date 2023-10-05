import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeemedicineComponent } from './seemedicine.component';

describe('SeemedicineComponent', () => {
  let component: SeemedicineComponent;
  let fixture: ComponentFixture<SeemedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeemedicineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeemedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
