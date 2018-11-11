import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddColegiosComponent } from './add-colegios.component';

describe('AddColegiosComponent', () => {
  let component: AddColegiosComponent;
  let fixture: ComponentFixture<AddColegiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddColegiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddColegiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
