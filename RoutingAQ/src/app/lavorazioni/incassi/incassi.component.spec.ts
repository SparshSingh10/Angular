import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncassiComponent } from './incassi.component';

describe('IncassiComponent', () => {
  let component: IncassiComponent;
  let fixture: ComponentFixture<IncassiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncassiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncassiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
