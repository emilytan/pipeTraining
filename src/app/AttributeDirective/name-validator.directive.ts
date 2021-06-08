import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appNamevalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NameValidatorDirective),
      // multi: true,
    },
  ],
})
export class NameValidatorDirective implements Validator {
  constructor() {}

  validate(c: AbstractControl): { [key: string]: any } {
    if (c.value === 'test') {
      return { test: true };
    }
    return null;
  }
}
