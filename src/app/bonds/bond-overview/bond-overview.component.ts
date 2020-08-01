import { Component, OnInit, Input } from '@angular/core';
import { Bond } from './bond.model';

@Component({
  selector: 'app-bond-overview',
  templateUrl: './bond-overview.component.html',
  styleUrls: ['./bond-overview.component.css'],
})
export class BondOverviewComponent implements OnInit {
  @Input()
  bond: Bond;

  constructor() {}

  ngOnInit(): void {}
}
