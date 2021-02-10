import {Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import {AuthenticationService} from '../../../_services/authentication.service';
import { AlertService } from '../../../_services/alert.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgotEmailForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.forgotEmailForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.forgotEmailForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgotEmailForm.invalid) {
      return;
    }
    
    this.loading = true;
    this.authenticationService.forgotPassword(this.f.email.value)
      .subscribe(
        data => {
          this.router.navigate(["auth/signin"]);
          this.alertService.information("If this email is registered, a reset message has been sent. Please follow the link to reset your password.");
        },
        error => {
          this.loading = false;
          this.alertService.error(error.error.Error);
        });
  }
}
