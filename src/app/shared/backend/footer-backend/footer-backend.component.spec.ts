import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBackendComponent } from './footer-backend.component';

describe('FooterBackendComponent', () => {
  let component: FooterBackendComponent;
  let fixture: ComponentFixture<FooterBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBackendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
