import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondOverviewComponent } from './bond-overview.component';

describe('BondOverviewComponent', () => {
  let component: BondOverviewComponent;
  let fixture: ComponentFixture<BondOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BondOverviewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondOverviewComponent);
    component = fixture.componentInstance;
    component.bond = {
      name: 'EDO0430',
      purchaseDate: '2020-04-29',
      amount: 12,
      actualValue: 1208.16,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
