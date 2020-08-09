import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordValidation, passwordConfirmValidation, pngjpgValidation, sizeValidation } from '../../../_utiltlies/validators';
import { AlertService } from '../../../_services/alert.service';
import { Register_Realtor } from '../../../_model/register_realtor'
import { RegisterService } from '../../../_services/register.service';

@Component({
  selector: 'app-signup-realtor',
  templateUrl: './signup-realtor.component.html',
  styleUrls: ['./signup-realtor.component.scss']
})
export class SignupRealtorComponent implements OnInit {
    public loading = false;

    public loginForm: FormGroup;
    public aboutForm: FormGroup;
    public contactForm: FormGroup;
    public reviewForm: FormGroup;

    public loginPage: boolean = false;
    public aboutPage: boolean = true;
    public contactPage: boolean = false;
    public reviewPage: boolean = false;

    public submittedLogin: boolean = false;
    public submittedAbout: boolean = false;
    public submittedContact: boolean = false;
    public submittedReview: boolean = false;

    public fileValues: string;
  
    constructor(private router: Router,
                private formBuilder: FormBuilder,
                private alertService: AlertService,
                private registerService: RegisterService) { }
  
    ngOnInit(): void {  
      this.loginForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6), passwordValidation]],
            passwordConfirm: ['', Validators.required]
        }, {
            validator: passwordConfirmValidation('password', 'passwordConfirm')
        });
  
      this.aboutForm = this.formBuilder.group({
        website: [''],
        facebook: [''],
        linkedin: [''],
        twitter: [''],
        instagram: [''],
        about: ['', Validators.required],
        profilePic: ['', pngjpgValidation]
      }, {
        validator: sizeValidation('profilePic', 'profilePic', 100, 2000000)
      });

      this.contactForm = this.formBuilder.group({
        brokerage: [''],
        cellPhone: [''],
        officePhone: [''],
        province: ['', Validators.required],
        city: ['', Validators.required],
        officeAddress: ['', Validators.required]
      });
  
      this.reviewForm = this.formBuilder.group({
        trial: ['', Validators.required],
        verify: ['', Validators.required],
        termsAndConditions: ['', Validators.required]
      });
    }

    changePhone(phone: string) {
      if (phone == 'cellPhone') {
        if (this.fc.cellPhone.value[this.fc.cellPhone.value.length - 1] !== undefined) {
          if (this.fc.cellPhone.value[this.fc.cellPhone.value.length - 1].match(/[0-9]/g) === null) {
            this.contactForm.controls.cellPhone.setValue(this.fc.cellPhone.value.substring(0, this.fc.cellPhone.value.length - 1));
          }
        }
      } else {
        if (this.fc.officePhone.value[this.fc.officePhone.value.length - 1] !== undefined) {
          if (this.fc.officePhone.value[this.fc.officePhone.value.length - 1].match(/[0-9]/g) === null) {
            this.contactForm.controls.officePhone.setValue(this.fc.officePhone.value.substring(0, this.fc.officePhone.value.length - 1));
          }
        }
      }
    }
  
    areYouSure(event: Event) {
      event.returnValue = false;
    }
  
    changedFile(event: Event) {
      var input = event.target;
  
      var reader = new FileReader();
      reader.onload = function(){
        var dataURL = reader.result;
        var outputFile = document.getElementById("profilePicLoaded");
        outputFile.setAttribute("src", dataURL.toString());
        outputFile.setAttribute("style", "");
      };
      reader.readAsDataURL((<HTMLInputElement>input).files[0]);
    }
  
    get f() { return this.loginForm.controls; }
  
    get fa() { return this.aboutForm.controls; }
    
    get fc() { return this.contactForm.controls; }
  
    get fr() { return this.reviewForm.controls; }
  
    onSubmitAbout() {
      this.submittedAbout = true;
  
      this.alertService.clear();
  
      if (this.aboutForm.invalid) {
        return;
      }
  
      this.loginPage = false;
      this.aboutPage = false;
      this.contactPage = true;
      this.reviewPage = false;
    }

    onSubmitContact() {
      this.submittedContact = true;
  
      this.alertService.clear();
  
      if (this.contactForm.invalid) {
        return;
      }
  
      this.loginPage = true;
      this.aboutPage = false;
      this.contactPage = false;
      this.reviewPage = false;
    }

    onBackContact() {
      this.alertService.clear();
  
      this.loginPage = false;
      this.aboutPage = true;
      this.contactPage = false;
      this.reviewPage = false;
    }
  
    onSubmitLogin() {
      this.submittedLogin = true;
  
      this.alertService.clear();
  
      if (this.loginForm.invalid) {
        return;
      }
  
      this.loginPage = false;
      this.aboutPage = false;
      this.contactPage = false;
      this.reviewPage = true;
    }
  
    onBackLogin() {
      this.alertService.clear();
  
      this.loginPage = false;
      this.aboutPage = false;
      this.contactPage = true;
      this.reviewPage = false;
    }
  
    onSubmitReview() {
      this.submittedReview = true;
  
      this.alertService.clear();
  
      if (this.reviewForm.invalid) {
        return;
      }
  
      var outputFile = (<HTMLInputElement>document.getElementById("profilePic")).files[0];
  
      var fileArray = this.fa.profilePic.value.split(".")
      var fileType = fileArray[fileArray.length - 1]
  
      var realtor: Register_Realtor = {
        firstName: this.f.firstName.value,
        lastName: this.f.lastName.value,
        email: this.f.email.value,
        password: this.f.password.value,
        website: this.fa.website.value,
        facebook: this.fa.facebook.value,
        linkedin: this.fa.linkedin.value,
        twitter: this.fa.twitter.value,
        instagram: this.fa.instagram.value,
        about: this.fa.about.value,
        brokerage: this.fc.brokerage.value,
        cellPhone: this.fc.cellPhone.value,
        officePhone: this.fc.officePhone.value,
        province: this.fc.province.value,
        city: this.fc.city.value,
        officeAddress: this.fc.officeAddress.value,
        fileType: fileType,
        profilePicture: outputFile,
        termsAndConditions: this.fr.termsAndConditions.value,
        trial: this.fr.trial.value
      }
      this.loading = true;
  
      this.registerService.registerRealtor(realtor)
      .subscribe(
          data => {
            this.alertService.success('Registration successful', true);
            this.router.navigate(["auth/signin"]);
            this.alertService.information("Registered Successfully");
          },
          error => {
            this.loading = false;
            this.alertService.error(error);
          });
    }
  
    onBackReview() {
      this.loginPage = true;
      this.aboutPage = false;
      this.contactPage = false;
      this.reviewPage = false;
      
      this.alertService.clear();
    }
}
