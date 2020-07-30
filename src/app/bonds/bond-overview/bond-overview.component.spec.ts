import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondOverviewComponent } from './bond-overview.component';

describe('BondOverviewComponent', () => {
  let component: BondOverviewComponent;
  let fixture: ComponentFixture<BondOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
