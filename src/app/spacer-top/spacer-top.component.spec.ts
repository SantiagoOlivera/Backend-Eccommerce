import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacerTopComponent } from './spacer-top.component';

describe('SpacerTopComponent', () => {
  let component: SpacerTopComponent;
  let fixture: ComponentFixture<SpacerTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacerTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacerTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
