import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleMusicComponent } from './apple-music.component';

describe('AppleMusicComponent', () => {
  let component: AppleMusicComponent;
  let fixture: ComponentFixture<AppleMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleMusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
