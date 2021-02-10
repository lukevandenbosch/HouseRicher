import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../../_services/register.service';
import { first } from 'rxjs/operators';
import { Register_User } from '../../../_model/register_user';
import { passwordValidation, passwordConfirmValidation } from '../../../_utiltlies/validators';
import { AuthenticationService } from '../../../_services/authentication.service';
import { AlertService } from '../../../_services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  password: FormControl;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService,
      private registerService: RegisterService
  ) {
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            province: ['', Validators.required],
            city: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6), passwordValidation]],
            passwordConfirm: ['', Validators.required],
            termsAndConditions: ['', Validators.required]
      }, {
          validator: passwordConfirmValidation('password', 'passwordConfirm')
      });
  }

  areYouSure(event: Event) {
    event.returnValue = false;
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.loading = true;

    var userRegister: Register_User = {
        firstName: this.f.firstName.value,
        lastName: this.f.lastName.value,
        email: this.f.email.value,
        province: this.f.province.value,
        city: this.f.city.value,
        password: this.f.password.value,
        termsAndConditions: this.f.termsAndConditions.value
    }

    this.registerService.registerUser(userRegister)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate(["auth/signin"]);
                this.alertService.success("Registered Successfully");
            },
            error => {
                this.loading = false;
                this.alertService.error(error.error.Error);
            });
  }
}
