import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0)
      return { cannotContainSpace: true };

    //   return {
    //     minlength: {
    //       requiredLength: 10,
    //       actualLength: control.value.length,
    //     },
    //   };
    return null;
  }

  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "parvez") resolve({ shouldBeUnique: true });
        else resolve(null);
      }, 2000);
    });
  }
}
