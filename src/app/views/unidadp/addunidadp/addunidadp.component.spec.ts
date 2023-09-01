import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddunidadpComponent } from './addunidadp.component';

describe('AddunidadpComponent', () => {
  let component: AddunidadpComponent;
  let fixture: ComponentFixture<AddunidadpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddunidadpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddunidadpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
