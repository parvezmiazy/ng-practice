import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent {
  constructor(private fb: FormBuilder) {}

  userProfileForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    address: this.fb.group({
      address1: ["", Validators.required],
      address2: ["", Validators.required],
      state: ["", Validators.required],
      zip: ["", Validators.required],
    }),
    mobiles: this.fb.array([this.fb.control("")]),
  });

  get mobiles() {
    return this.userProfileForm.get("mobiles") as FormArray;
  }

  AddMore() {
    this.mobiles.push(this.fb.control(""));
  }

  onSubmit() {
    console.log(this.userProfileForm.value);
  }
}
