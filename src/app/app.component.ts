import { typeSourceSpan } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  viewMode = "somethingElse";
  newCourses;
  // courses = [1, 2];
  courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" },
  ];

  onAdd() {
    this.courses.push({ id: 4, name: "course4" });
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course) {
    course.name = "updated course";
  }

  loadCourses() {
    this.newCourses = [
      { id: 1, name: "course4" },
      { id: 2, name: "course5" },
      { id: 3, name: "course6" },
      { id: 4, name: "course7" },
      { id: 5, name: "course8" },
    ];
  }
  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  title = "Angular App";

  post = {
    title: "Title for favorite",
    isFavorite: false,
  };

  task = {
    title: "Review Application",
    assignee: null,
  };
}
