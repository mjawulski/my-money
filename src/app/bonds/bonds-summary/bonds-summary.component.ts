import { Component, OnInit } from '@angular/core';
import { Bond } from '../bond-overview/bond.model';

@Component({
  selector: 'app-bonds-summary',
  templateUrl: './bonds-summary.component.html',
  styleUrls: ['./bonds-summary.component.css'],
})
export class BondsSummaryComponent implements OnInit {
  bonds: Bond[] = [
    {
      name: 'EDO0430',
      purchaseDate: '2020-04-29',
      amount: 12,
      actualValue: 1208.16,
    },
    {
      name: 'ROD0732',
      purchaseDate: '2020-07-30',
      amount: 5,
      actualValue: 500.05,
    },
    {
      name: 'ROD0732',
      purchaseDate: '2020-07-31',
      amount: 85,
      actualValue: 8500.85,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
