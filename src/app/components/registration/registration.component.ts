import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {validateEmail} from "../../validators/email.validator";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, validateEmail]],
      phone: ["", [Validators.required]],
      passwords: this.formBuilder.group({
        password: ["", [Validators.required]],
        repeatPassword: ["", [Validators.required]]
      }),
      privacyTerms: [false, [Validators.requiredTrue]]
    });
  }

  onSubmit($event): void {
    console.log(this.registrationForm.valid, this.registrationForm.value);
  }
}
