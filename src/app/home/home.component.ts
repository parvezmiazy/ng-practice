import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { InterestModel } from "./interest.model";
import { PetModel } from "./PetModel.model";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public form: {
    name: "";
    email: "";
    pets: PetModel[];
    interests: InterestModel[];
  };
  pets: PetModel;

  // I initialize the app component.
  constructor() {}
  ngOnInit() {
    this.form = {
      name: "",
      email: "",
      pets: [],
      interests: [],
    };

    // Add an initial pet form-entry.
    this.addPet();
    this.addInterst();
  }

  // ngOnInit() {
  //   this.HomeModel = {
  //     name: "",
  //     email: "",
  //     pets: [],
  //   };
  // }
  // ---
  // PUBLIC METHODS.
  // ---

  // I add a new pet record to the form-model.
  public addPet() {
    this.form.pets.push({
      id: Date.now(),
      type: "",
      name: "",
      age: "",
      isPastOn: false,
    });
  }
  public addInterst() {
    this.form.interests.push({
      id: Date.now(),
      item_name: "",
      price: "",
      qty: "",
    });
  }

  // I process the form-model.
  public processForm(form: any): void {
    console.log(this.form);
  }

  public removePet(index: number): void {
    this.form.pets.splice(index, 1);
  }
  public removeInterest(index: number): void {
    this.form.interests.splice(index, 1);
  }
}
