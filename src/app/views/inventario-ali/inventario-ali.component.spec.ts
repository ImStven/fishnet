import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioAliComponent } from './inventario-ali.component';

describe('InventarioAliComponent', () => {
  let component: InventarioAliComponent;
  let fixture: ComponentFixture<InventarioAliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioAliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioAliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
