import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataenterComponent } from './dataenter.component';

describe('DataenterComponent', () => {
  let component: DataenterComponent;
  let fixture: ComponentFixture<DataenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
