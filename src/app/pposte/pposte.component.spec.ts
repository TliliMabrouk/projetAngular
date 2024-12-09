import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PposteComponent } from './pposte.component';

describe('PposteComponent', () => {
  let component: PposteComponent;
  let fixture: ComponentFixture<PposteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PposteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PposteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
