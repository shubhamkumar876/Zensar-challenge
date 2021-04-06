import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDBComponent } from './my-db.component';

describe('MyDBComponent', () => {
  let component: MyDBComponent;
  let fixture: ComponentFixture<MyDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
