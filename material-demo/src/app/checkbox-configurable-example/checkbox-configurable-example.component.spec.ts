import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxConfigurableExampleComponent } from './checkbox-configurable-example.component';

describe('CheckboxConfigurableExampleComponent', () => {
  let component: CheckboxConfigurableExampleComponent;
  let fixture: ComponentFixture<CheckboxConfigurableExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxConfigurableExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxConfigurableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
