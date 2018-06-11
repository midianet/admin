import { NgModule } from '@angular/core';

import { OnlyNumberDirective } from './only-number.directive';
import { ValidatorStyleDirective } from './validator.style.directive';

@NgModule({
  exports: [OnlyNumberDirective, ValidatorStyleDirective],
  declarations: [OnlyNumberDirective, ValidatorStyleDirective]
})
export class AppDirectiveModule { }
