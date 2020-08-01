import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BondOverviewComponent } from './bond-overview/bond-overview.component';
import { MaterialModule } from '../material/material.module';
import { BondsSummaryComponent } from './bonds-summary/bonds-summary.component';

@NgModule({
  declarations: [BondOverviewComponent, BondsSummaryComponent],
  imports: [CommonModule, MaterialModule],
  exports: [BondsSummaryComponent],
})
export class BondsModule {}
