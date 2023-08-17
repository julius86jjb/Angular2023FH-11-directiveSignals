import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLabelDirective } from './directives/custom-label.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CustomLabelDirective
  ],
  declarations: [
    CustomLabelDirective
  ],
  providers: [],
})
export class SharedModule { }
