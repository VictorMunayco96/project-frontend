import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesModalFormComponent } from './sales-modal-form.component';

describe('SalesModalFormComponent', () => {
  let component: SalesModalFormComponent;
  let fixture: ComponentFixture<SalesModalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesModalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
