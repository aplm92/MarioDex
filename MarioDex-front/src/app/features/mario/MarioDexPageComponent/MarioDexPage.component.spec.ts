import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariodexPageComponent } from './MarioDexPage.component';

describe('MariodexPageComponent', () => {
  let component: MariodexPageComponent;
  let fixture: ComponentFixture<MariodexPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MariodexPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MariodexPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
