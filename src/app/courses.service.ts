import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject}  from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  constructor(private http: HttpClient) {
  }

  branch = new Subject();



  setBranch(branch){
    this.branch.next(branch);
  }

  private baseUrl = "https://192.168.45.28:8282";
  getCourses() {
    return ["course1", "course2", "course3"];
  }

  getSearchByValue(search) {
    let body = {
      searchText: search,
    };
    return this.http.post(this.baseUrl + "/search-customer", body);
  }
}
