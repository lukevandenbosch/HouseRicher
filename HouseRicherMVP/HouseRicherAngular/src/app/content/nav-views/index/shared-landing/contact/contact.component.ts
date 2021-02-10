import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@app/_services/alert.service';
import { EmailAppService } from '@app/_services/email-app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactUsForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private alertService: AlertService,
              private emailAppService: EmailAppService) { }

  ngOnInit(): void {
    this.contactUsForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get f() { return this.contactUsForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactUsForm.invalid) {
        return;
    }
    this.loading = true;

    this.emailAppService.contactUs(this.f.name.value, this.f.email.value,this.f.message.value)
        .subscribe(
            data => {
                this.alertService.success('Your messsage sent successful. We will get back to you as soon as possible.');
                this.loading = false;
                this.submitted = false;
                this.contactUsForm.reset();
                //TODO Fix Alert Service
            },
            error => {
                this.loading = false;
                this.alertService.error('There was an error sending the message.');
            });
  }
}
