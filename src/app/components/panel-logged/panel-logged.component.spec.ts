import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLoggedComponent } from './panel-logged.component';

describe('PanelLoggedComponent', () => {
  let component: PanelLoggedComponent;
  let fixture: ComponentFixture<PanelLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelLoggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
