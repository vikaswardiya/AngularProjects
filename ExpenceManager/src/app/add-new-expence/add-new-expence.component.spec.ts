import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewExpenceComponent } from './add-new-expence.component';

describe('AddNewExpenceComponent', () => {
  let component: AddNewExpenceComponent;
  let fixture: ComponentFixture<AddNewExpenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewExpenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewExpenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
