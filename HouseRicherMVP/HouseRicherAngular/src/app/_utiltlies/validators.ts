import { FormGroup, AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

export function passwordValidation(control: AbstractControl): {[key: string]: any} | null  {
    if (control.value.match(/^.*[0-9].*$/) && control.value.match(/^.*[A-Z].*$/) && control.value.match(/^.*[a-z].*$/) && control.value.match(/^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/)) {
        return null;
    }
    return { 'passwordValidation': true };
}

export function pngjpgValidation(control: AbstractControl): {[key: string]: any} | null  {
    if (control.value.match(/^.*([.][Jj][Pp][Gg]|[.][Pp][Nn][Gg])$/)) {
        return null;
    }
    return { 'pngjpgValidation': true };
}

export function sizeValidation(controlName: string, inputFileID: string, minSize: number, maxSize: number) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        var inputFile = (<HTMLInputElement>document.getElementById(inputFileID));
        var error = null;
        if (control.getError("pngjpgValidation")) {
            error = { 'pngjpgValidation': true };
        }
        
        if (inputFile.files.length !== 1) {
            control.setErrors(error);
        }
        else if (inputFile.files[0].size < minSize || inputFile.files[0].size > maxSize) {
            control.setErrors({ 'sizeValidation': true });
        } else {
            control.setErrors(error);
        }
    }
}

export function passwordConfirmValidation(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }
        
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ 'passwordConfirmValidation': true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

export function annonymousValidation(controlName: string, token: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];

        if (control.errors) {
            return;
        }
        
        if (token === null) {
            if (!control.value) {
                control.setErrors({ 'annonymousValidation': true });
            } else {
                control.setErrors(null);
            }
        } else {
            control.setErrors(null);
        }
    }
}