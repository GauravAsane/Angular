import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnolgiesComponent } from './technolgies.component';

describe('TechnolgiesComponent', () => {
  let component: TechnolgiesComponent;
  let fixture: ComponentFixture<TechnolgiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnolgiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnolgiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
