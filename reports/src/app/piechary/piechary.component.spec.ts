import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecharyComponent } from './piechary.component';

describe('PiecharyComponent', () => {
  let component: PiecharyComponent;
  let fixture: ComponentFixture<PiecharyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiecharyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiecharyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
