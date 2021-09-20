import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    {{ text | summary: 15 }}
    <br />

    {{ course.title | uppercase | lowercase }}

    {{ course.rating | number: "1.2-2" }}

    {{ course.price | currency: "BDT":true:"3.2-2" }}

    {{ course.releaseDate | date: "shortDate" }}

    <h2>{{ title }}</h2>

    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>

    <img src="{{ imageUrl }}" />

    <table>
      <tr>
        <td [colspan]="colSpan">Parvez ahmed</td>
      </tr>
    </table>

    <button
      class="btn btn-success"
      [style.backgroundColor]="isActive ? 'blue' : 'red'"
    >
      Save
    </button>
    <div (click)="onDivClicked()">
      <button (click)="onClick($event)">Click</button>
    </div>
    <input (keyup.enter)="email = $event.target.value" [value]="email" />
    <br />
    <input (keyup.enter)="onKeyUp()" [(ngModel)]="email" />
  `,
})
export class CoursesComponent {
  text = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
   standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
   make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
   typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
     like Aldus PageMaker including versions of Lorem Ipsum.`;
  course = {
    title: "title",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1),
  };
  email = "miazyparvez@gmail.com";
  onKeyUp() {
    console.log(this.email);
  }

  // onKeyUp($event) {
  //   console.log("You Entered the value of", $event.target.value);
  // }
  // onDivClicked() {
  //   console.log("Div was clicked");
  // }
  // onClick($event) {
  //   console.log("button clicked", $event);
  //   $event.stopPropagation();
  // }
  title = "List of course";
  imageUrl = "http://lorempixel.com/400/200/";
  courses;

  isActive = true;

  colSpan = 2;

  //courses = ["course1", "course2", "course3"];

  //Logic for calling an http service

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
