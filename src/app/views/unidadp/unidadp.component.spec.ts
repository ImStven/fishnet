import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadpComponent } from './unidadp.component';

describe('UnidadpComponent', () => {
  let component: UnidadpComponent;
  let fixture: ComponentFixture<UnidadpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
