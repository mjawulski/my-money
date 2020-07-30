import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BondOverviewComponent } from './bond-overview/bond-overview.component';

@NgModule({
  declarations: [BondOverviewComponent],
  imports: [CommonModule],
  exports: [BondOverviewComponent],
})
export class BondsModule {}
