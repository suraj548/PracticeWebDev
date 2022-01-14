import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgdisplayComponent } from './msgdisplay.component';

describe('MsgdisplayComponent', () => {
  let component: MsgdisplayComponent;
  let fixture: ComponentFixture<MsgdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
