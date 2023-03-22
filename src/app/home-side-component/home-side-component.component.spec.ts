import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSideComponentComponent } from './home-side-component.component';

describe('HomeSideComponentComponent', () => {
  let component: HomeSideComponentComponent;
  let fixture: ComponentFixture<HomeSideComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSideComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSideComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
