import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrivaniaEsteroComponent } from './scrivania-estero.component';

describe('ScrivaniaEsteroComponent', () => {
  let component: ScrivaniaEsteroComponent;
  let fixture: ComponentFixture<ScrivaniaEsteroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrivaniaEsteroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrivaniaEsteroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
