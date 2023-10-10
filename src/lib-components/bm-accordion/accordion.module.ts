import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { BMIconModule } from '../bm-icon/bm-icon.module';

@NgModule({
  imports: [
    CommonModule,
    BMIconModule
  ],
  declarations: [AccordionComponent],
  exports: [AccordionComponent]
})
export class AccordionModule { }
