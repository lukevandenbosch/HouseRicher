import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthenticationService} from '@app/_services/authentication.service';
import { ProfileService } from '@app/_services/profile.service';
import { AlertService } from '@app/_services/alert.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Profile } from '@app/_model/profile';
import { pngjpgValidation, sizeValidation } from '@app/_utiltlies/validators';

@Component({
    selector: 'profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
    public id: number;

    aboutButton: string;
    editDescription: boolean = false;
    editPersonal: boolean = false;
    editContact: boolean = false;
    editProfile: boolean = false;

    currentUser: any;
    following: any;
    isCurrentUser: boolean;

    profile: any;
    posts: any;
    ratings: any;

    provinceSetter: string;

    rating: number;

    reviewForm: FormGroup;

    descriptionForm: FormGroup;
    overviewForm: FormGroup;
    contactForm: FormGroup;
    
    ratingValue: number = 0;
    submitted: boolean = false;
    submittedDescription: boolean = false;
    submittedOverview: boolean = false;
    submittedContact: boolean = false;
    submittedPersonal: boolean = false;
    loading: boolean = false;

    constructor(private activeRoute: ActivatedRoute, 
                private authenticationService: AuthenticationService,
                private formBuilder: FormBuilder,
                private profileService: ProfileService,
                private alertService: AlertService) {
    }

    ngOnInit() {
        this.id = parseInt(decodeURIComponent(this.activeRoute.snapshot.paramMap.get('id')));
        this.currentUser = this.authenticationService.currentUserValue;

        this.reviewForm = this.formBuilder.group({
            message: ['', Validators.required],
            rating: ['', Validators.required]
        });

        this.descriptionForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            profilePic: ['', Validators.required, pngjpgValidation],
            about: ['', Validators.required]
        }, {
            validator: sizeValidation('profilePic', 'profilePic', 100, 2000000)
        });
        
        this.overviewForm = this.formBuilder.group({
            brokerage: [''],
            address: [''],
            city: ['', Validators.required],
            province: ['', Validators.required]
        });
        
        this.contactForm = this.formBuilder.group({
            email: ['', Validators.required, Validators.email],
            firstName: [''],
            lastName: [''],
            city: [''],
            province: [''],
            profilePic: [''],
            website: [''],
            cell: [''],
            office: [''],
            facebook: [''],
            linkedin: [''],
            twitter: [''],
            instagram: [''],
        });

        if (this.currentUser !== null) {
            if (this.id === this.currentUser.id) {
                this.isCurrentUser = true;
            } else {
                this.isCurrentUser = false;
            }
        }
        var token = this.authenticationService.currentUserValue == null ? null : this.authenticationService.currentUserValue.token

        this.getProfile(token);

        this.profileService.getUserPosts(this.id)
                .subscribe(
                    data => {
                        this.posts = data;
                    },
                    error => {
                        this.alertService.error("User Posts Could Not be Loaded");
                    });

        this.profileService.getFollowing(this.id, token)
                .subscribe(
                    data => {
                        this.following = data;
                    },
                    error => {
                        this.alertService.error("Following Users Could Not be Loaded");
                    });

        this.getReviews();
    }

    get f() { return this.reviewForm.controls; }
    get fd() { return this.descriptionForm.controls; }
    get fo() { return this.overviewForm.controls; }
    get fc() { return this.contactForm.controls; }

    profilePicEdit() {
        if (this.profile.isRealtor) {
            this.editDescription = true;
        }
        else {
            this.editContact = true;
        }
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

    changedFileContact(event: Event) {
        var input = event.target;
    
        var reader = new FileReader();
        reader.onload = function(){
          var dataURL = reader.result;
          var outputFile = document.getElementById("profilePicLoadedContact");
          outputFile.setAttribute("src", dataURL.toString());
          outputFile.setAttribute("style", "");
        };
        reader.readAsDataURL((<HTMLInputElement>input).files[0]);
    }

    getProfile(token: string) {
        this.profileService.getProfile(this.id, token)
            .subscribe(
                data => {
                    this.profile = data;
                    this.aboutButton = this.profile.isRealtor ? 'about' : 'following';
                    this.resetForm();
                },
                error => {
                    this.alertService.error("User Could Not be Loaded");
                });
    }

    changePhone(phone: string) {
        if (phone == 'cell') {
          if (this.fc.cell.value[this.fc.cell.value.length - 1] !== undefined) {
            if (this.fc.cell.value[this.fc.cell.value.length - 1].match(/[0-9]/g) === null) {
              this.contactForm.controls.cell.setValue(this.fc.cell.value.substring(0, this.fc.cell.value.length - 1));
            }
          }
        } else {
          if (this.fc.office.value[this.fc.office.value.length - 1] !== undefined) {
            if (this.fc.office.value[this.fc.office.value.length - 1].match(/[0-9]/g) === null) {
              this.contactForm.controls.office.setValue(this.fc.office.value.substring(0, this.fc.office.value.length - 1));
            }
          }
        }
      }

    resetForm() {
        this.fd.firstName.setValue(this.profile.firstName);
        this.fd.lastName.setValue(this.profile.lastName);
        this.fd.profilePic.setValue(null);
        var outputFile = document.getElementById("profilePicLoaded");
        outputFile.removeAttribute("src");
        this.fd.about.setValue(this.profile.about);
        this.fo.brokerage.setValue(this.profile.brokerage);
        this.fo.address.setValue(this.profile.address);
        this.fo.city.setValue(this.profile.city);
        this.fo.province.setValue(this.profile.provinceState);
        this.fc.email.setValue(this.profile.email);
        this.fc.firstName.setValue(this.profile.firstName);
        this.fc.lastName.setValue(this.profile.lastName);
        this.fc.city.setValue(this.profile.city);
        this.fc.province.setValue(this.profile.provinceState);
        this.fc.profilePic.setValue(null);
        var outputFile = document.getElementById("profilePicLoadedContact");
        outputFile.removeAttribute("src");
        this.fc.website.setValue(this.profile.website);
        this.fc.cell.setValue(this.profile.cell);
        this.fc.office.setValue(this.profile.office);
        this.fc.facebook.setValue(this.profile.facebook);
        this.fc.linkedin.setValue(this.profile.linkedin);
        this.fc.twitter.setValue(this.profile.twitter);
        this.fc.instagram.setValue(this.profile.instagram);
    }

    formatPhone(phoneNumber: string) {
        var returnPhone = ""
        if (phoneNumber.length === 11) {
            returnPhone = phoneNumber[0] + " (" + phoneNumber[1] + phoneNumber[2] + phoneNumber[3] + ") " + phoneNumber[4] + phoneNumber[5] + phoneNumber[6] + "-" + phoneNumber[7] + phoneNumber[8] + phoneNumber[9] + phoneNumber[10]
        }
        else if (phoneNumber.length === 10) {
            returnPhone = "(" + phoneNumber[0] + phoneNumber[1] + phoneNumber[2] + ") " + phoneNumber[3] + phoneNumber[4] + phoneNumber[5] + "-" + phoneNumber[6] + phoneNumber[7] + phoneNumber[8] + phoneNumber[9]
        }
        else if (phoneNumber.length === 7) {
            returnPhone = phoneNumber[0] + phoneNumber[1] + phoneNumber[2] + "-" + phoneNumber[3] + phoneNumber[4] + phoneNumber[5] + phoneNumber[6]
        }
        return returnPhone
    }

    getReviews() {
        this.profileService.getReviews(this.id)
            .subscribe(
                data => {
                    this.ratings = data;
                    this.rating = 0
                    for (var i = 0; i < this.ratings.length; i++) {
                        this.rating += this.ratings[i].rating;
                    }
                    this.rating = this.rating / this.ratings.length;
                },
                error => {
                    this.alertService.error("Reviews Could Not be Loaded");
                });
    }

    follow() {
        if (this.currentUser !== null) {
            this.profileService.follow(this.profile.id, this.authenticationService.currentUserValue.token)
                .subscribe(
                data => {
                },
                error => {
                }); 
        
            if (this.profile.following) {
                this.profile.followers--;
            } else {
                this.profile.followers++;
            }
            this.profile.following = !this.profile.following;
        }
    }

    followUser(user: any) {
        if (this.currentUser !== null) {
            this.profileService.follow(user.id, this.authenticationService.currentUserValue.token)
                .subscribe(
                data => {
                },
                error => {
                }); 
            
            user.followed = !user.followed;
        }
    }

    onSubmitReview() {
        if (this.currentUser !== null) {
            this.submitted = true;

            // stop here if form is invalid
            if (this.reviewForm.invalid) {
                return;
            }
            this.loading = true;

            this.profileService.postReview(this.id, this.f.message.value, this.f.rating.value, this.currentUser.token)
                .subscribe(
                    data => {
                        this.reviewForm.reset();
                        this.alertService.information("Review Posted.");
                        this.submitted = false;
                        this.loading = false;
                        this.ratingValue = 0;
                        this.getReviews();
                    },
                    error => {
                        this.loading = false;
                        this.submitted = false;
                        this.alertService.error("Review failed to send.");
                    });
        }
    }

    cancelDescription() {
        this.editDescription = false;
        this.resetForm();
    }

    onSubmitDescription() {
        this.submittedDescription = true;

        // stop here if form is invalid
        if (this.descriptionForm.invalid) {
            return;
        }
        this.loading = true;

        var token = this.authenticationService.currentUserValue == null ? null : this.authenticationService.currentUserValue.token;

        var profileValue: Profile = {
            firstName: this.fd.firstName.value,
            lastName: this.fd.lastName.value,
            about: this.fd.about.value
        }

        var outputFile = (<HTMLInputElement>document.getElementById("profilePic")).files[0];

        var fileArray = this.fd.profilePic.value.split(".")
        var fileType = fileArray[fileArray.length - 1]

        if (outputFile !== undefined) {
            profileValue.profilePicture = outputFile;
            profileValue.fileType = fileType;
        }

        this.profileService.updateProfile(profileValue, token)
            .subscribe(
                data => {
                    this.editDescription = false;
                    this.alertService.information("Description updated sucessfully.");
                    this.submittedDescription = false;
                    this.loading = false;
                    this.getProfile(token);
                },
                error => {
                    this.loading = false;
                    this.submittedDescription = false;
                    this.alertService.error("Description failed to update.");
                });
    }
    
    cancelOverview() {
        this.editPersonal = false;
        this.resetForm();
    }

    onSubmitOverview() {
        this.submittedOverview = true;

        // stop here if form is invalid
        if (this.overviewForm.invalid) {
            return;
        }
        this.loading = true;

        var token = this.authenticationService.currentUserValue == null ? null : this.authenticationService.currentUserValue.token;

        var profileValue: Profile = {
            brokerage: this.fo.brokerage.value,
            address: this.fo.address.value,
            city: this.fo.city.value,
            provinceState: this.fo.province.value
        }

        this.profileService.updateProfile(profileValue, token)
            .subscribe(
                data => {
                    this.editPersonal = false;
                    this.alertService.information("Overview updated sucessfully.");
                    this.submittedOverview = false;
                    this.loading = false;
                    this.getProfile(token);
                },
                error => {
                    this.loading = false;
                    this.submittedOverview = false;
                    this.alertService.error("Overview failed to update.");
                });
    }

    editContactInfo() {
        this.editContact = true;
        this.resetForm();
    }

    cancelContact() {
        this.editContact = false;
        this.resetForm();
    }

    onSubmitContact() {
        this.submittedContact = true;

        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }
        this.loading = true;

        var token = this.authenticationService.currentUserValue == null ? null : this.authenticationService.currentUserValue.token;

        var profileValue: Profile = {
            email: this.fc.email.value,
            firstName: this.fc.firstName.value,
            lastName: this.fc.lastName.value,
            city: this.fc.city.value,
            provinceState: this.fc.province.value,
            website: this.fc.website.value,
            phoneNumberCell: this.fc.cell.value,
            phoneNumberOffice: this.fc.office.value,
            facebook: this.fc.facebook.value,
            linkedin: this.fc.linkedin.value,
            twitter: this.fc.twitter.value,
            instagram: this.fc.instagram.value
        }

        var outputFile = (<HTMLInputElement>document.getElementById("profilePicContact")).files[0];

        var fileArray = this.fc.profilePic.value.split(".")
        var fileType = fileArray[fileArray.length - 1]

        if (outputFile !== undefined) {
            profileValue.profilePicture = outputFile;
            profileValue.fileType = fileType;
        }

        this.profileService.updateProfile(profileValue, token)
            .subscribe(
                data => {
                    this.editContact = false;
                    this.alertService.information("Contact updated sucessfully.");
                    this.submittedContact = false;
                    this.loading = false;
                    this.getProfile(token);
                },
                error => {
                    this.loading = false;
                    this.submittedContact = false;
                    this.alertService.error("Contact failed to update.");
                });
    }

    rate(rating: number) {
        this.reviewForm.controls['rating'].setValue(rating)
        this.ratingValue = rating;
    }
}
