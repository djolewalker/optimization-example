import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncrementorComponent } from './incrementor.component';

@NgModule({
  imports: [CommonModule],
  declarations: [IncrementorComponent],
  exports: [IncrementorComponent],
})
export class IncrementorModule {}
