import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsMasterComponent } from './rx-js-master.component';

describe('RxJsMasterComponent', () => {
  let component: RxJsMasterComponent;
  let fixture: ComponentFixture<RxJsMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJsMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
