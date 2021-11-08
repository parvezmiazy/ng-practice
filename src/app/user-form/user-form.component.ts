import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CoursesService } from "../courses.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"],
})
export class UserFormComponent implements OnInit {
  constructor(private courses: CoursesService) {}

  @Output() parentComponent: EventEmitter<any> = new EventEmitter();
  id: any;
  ngOnInit() {
    this.courses.branch.subscribe((data) => {
      this.id = data;
    });
  }

  sendData() {
    let item = { name: "Parvez Hasan", age: 26 };
    this.parentComponent.emit(item);
  }
}
