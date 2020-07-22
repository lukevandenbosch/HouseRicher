import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../_services/user.service';
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
      private userService: UserService
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
          password: ['', [Validators.required, Validators.minLength(6), passwordValidation]],
          passwordConfirm: ['', Validators.required],
          accept: ['', Validators.required],
          realtor: ['']
      }, {
          validator: passwordConfirmValidation('password', 'passwordConfirm')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      var userRegister: Register_User = {
          firstName: this.f.firstName.value,
          lastName: this.f.lastName.value,
          email: this.f.email.value,
          password: this.f.password.value,
          accept: this.f.accept.value
      }

      if (this.f.realtor.value) {
          this.router.navigate(['/realtor-registration/' + encodeURIComponent(this.f.firstName.value) + '/' + encodeURIComponent(this.f.lastName.value) + '/' + encodeURIComponent(this.f.email.value) + '/' + this.f.accept.value.toString() ]);
      }
      else {
          this.loading = true;
          this.userService.register(userRegister)
              .pipe(first())
              .subscribe(
                  data => {
                      this.registerForm.reset();
                  },
                  error => {
                      this.loading = false;
                      this.alertService.error(error);
                  });
      }
  }
}
