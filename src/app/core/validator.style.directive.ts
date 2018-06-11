import { Directive, Self, HostBinding } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  //selector: '[formControlName],[ngModel],[formControl]',
  selector : '[validatorStyle]',
})
export class ValidatorStyleDirective {

  constructor(@Self() private element: NgControl) { }

  @HostBinding('class.is-invalid')
  get isInvalid(): boolean {
    const control = this.element.control;
    return control ? control.invalid && control.touched : false;
  }

}
