import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsernameValidators } from "./username.validators";

@Component({
  selector: "signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"],
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    }),
    username: new FormControl(
      "",
      Validators.required,
      UsernameValidators.shouldBeUnique
    ),
    password: new FormControl("", Validators.required),
  });

  // get username() {
  //   return this.form.get("username");
  // }

  // form = new FormGroup({
  //   username: new FormControl("", [
  //     Validators.required,
  //     UsernameValidators.shouldBeUnique,
  //     Validators.minLength(3),
  //     UsernameValidators.cannotContainSpace,
  //   ]),
  //   password: new FormControl("", [Validators.required]),
  // });

  login(form) {
    // let isValid = authService.login(this.form.value);
    // if (!isValid) {

    // }
    this.form.setErrors({
      invalidLogin: true,
    });
  }

  get username() {
    return this.form.get("account.username");
  }
  // get username() {
  //   return this.form.get("username");
  // }
}
