import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaladyaComponent } from './baladya.component';

describe('BaladyaComponent', () => {
  let component: BaladyaComponent;
  let fixture: ComponentFixture<BaladyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaladyaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaladyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
