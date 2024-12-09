import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionplsComponent } from './sectionpls.component';

describe('SectionplsComponent', () => {
  let component: SectionplsComponent;
  let fixture: ComponentFixture<SectionplsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionplsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionplsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
