import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogularWrapperComponent } from './videogular-wrapper.component';

describe('VideogularWrapperComponent', () => {
  let component: VideogularWrapperComponent;
  let fixture: ComponentFixture<VideogularWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogularWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogularWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
