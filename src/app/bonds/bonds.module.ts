import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BondOverviewComponent } from './bond-overview/bond-overview.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [BondOverviewComponent],
  imports: [CommonModule, MaterialModule],
  exports: [BondOverviewComponent],
})
export class BondsModule {}
