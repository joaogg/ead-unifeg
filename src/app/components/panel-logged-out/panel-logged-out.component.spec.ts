import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLoggedOutComponent } from './panel-logged-out.component';

describe('PanelLoggedOutComponent', () => {
  let component: PanelLoggedOutComponent;
  let fixture: ComponentFixture<PanelLoggedOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelLoggedOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelLoggedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
