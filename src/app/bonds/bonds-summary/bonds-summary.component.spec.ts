import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondsSummaryComponent } from './bonds-summary.component';

describe('BondsSummaryComponent', () => {
  let component: BondsSummaryComponent;
  let fixture: ComponentFixture<BondsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
