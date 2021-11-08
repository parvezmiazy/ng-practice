import { Component, OnInit } from "@angular/core";
import { CoursesService } from "../courses.service";


@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(private courses:CoursesService) {}

  ngOnInit() {}

  changeBranch(branch){
    this.courses.setBranch(branch)
  }
}
