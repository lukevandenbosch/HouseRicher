import {Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {AuthenticationService} from '../../../_services/authentication.service';
import { AlertService } from '../../../_services/alert.service';
import { passwordConfirmValidation, passwordValidation } from '@app/_utiltlies/validators';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent {
  passwordResetForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.passwordResetForm = this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(6), passwordValidation]],
        passwordConfirm: ['', Validators.required]
      }, {
          validator: passwordConfirmValidation('password', 'passwordConfirm')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.passwordResetForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.passwordResetForm.invalid) {
      return;
    }

    var token = this.activeRoute.snapshot.paramMap.get('token');
    
    this.loading = true;
    this.authenticationService.passwordReset(this.f.password.value, token)
      .subscribe(
        data => {
          this.router.navigate(["auth/signin"]);
          this.alertService.success("Your Password was sucessfully reset.");
        },
        error => {
          this.loading = false;
          this.alertService.error(error.error.Error);
        });
  }
}
