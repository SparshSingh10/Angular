import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrivaniaItaliaComponent } from './scrivania-italia.component';

describe('ScrivaniaItaliaComponent', () => {
  let component: ScrivaniaItaliaComponent;
  let fixture: ComponentFixture<ScrivaniaItaliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrivaniaItaliaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrivaniaItaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
