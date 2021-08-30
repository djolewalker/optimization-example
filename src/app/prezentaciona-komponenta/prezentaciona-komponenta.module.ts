import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrezentacionaKomponentaComponent } from './prezentaciona-komponenta.component';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [PrezentacionaKomponentaComponent],
  exports: [PrezentacionaKomponentaComponent],
})
export class PrezentacionaKomponentaModule {}
