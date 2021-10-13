import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmPlayerWrapperComponent } from './vm-player-wrapper.component';

describe('VmPlayerWrapperComponent', () => {
  let component: VmPlayerWrapperComponent;
  let fixture: ComponentFixture<VmPlayerWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmPlayerWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmPlayerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
