import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userProfileForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      // address: this.fb.group({
      //   address1: ["", Validators.required],
      //   address2: ["", Validators.required],
      //   state: ["", Validators.required],
      //   zip: ["", Validators.required],
      // }),
      quantities: this.fb.array([this.initQuantity()]),
      interests: this.fb.array([this.initInterest()]),
      //mobiles: this.fb.array([this.fb.control("")]),
    });
  }

  // get mobiles() {
  //   return this.userProfileForm.get("mobiles") as FormArray;
  // }

  quantities(): FormArray {
    return this.userProfileForm.get("quantities") as FormArray;
  }

  interests(): FormArray {
    return this.userProfileForm.get("interests") as FormArray;
  }

  initQuantity() {
    return this.fb.group({
      mobile: ["", Validators.required],
      qty: ["", Validators.required],
      price: ["", Validators.required],
    });
  }

  initInterest() {
    return this.fb.group({
      itemname: ["", Validators.required],
      zip: ["", Validators.required],
      state: ["", Validators.required],
    });
  }

  AddQuantity() {
    this.quantities().push(this.initQuantity());
  }

  AddInterest() {
    this.interests().push(this.initInterest());
  }

  removeQuantity(i: number) {
    this.quantities().removeAt(i);
  }
  removeInterest(i: number) {
    this.interests().removeAt(i);
  }

  onSubmit() {
    console.log(this.userProfileForm.value);
  }
}
