import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterPetsComponent } from './enter-pets.component';

describe('EnterPetsComponent', () => {
  let component: EnterPetsComponent;
  let fixture: ComponentFixture<EnterPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterPetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
