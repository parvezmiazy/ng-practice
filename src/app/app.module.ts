import { BrowserModule } from "@angular/platform-browser";
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";

import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";
import { CourseComponent } from "./course/course.component";
import { CoursesService } from "./courses.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SummaryPipe } from "./summary.pipe";
import { FavoriteComponent } from "./favorite/favorite.component";
import { InputFormatDirective } from "./input-format.directive";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { NewCourseFormComponent } from "./new-course-form/new-course-form.component";
import { PostsComponent } from "./posts/posts.component";
import { HttpClientModule } from "@angular/common/http";
import { PostService } from "./services/post.service";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { RouterModule } from "@angular/router";
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "profile", component: ProfileComponent },
      { path: "posts", component: PostsComponent },
    ]),
  ],
  exports: [CourseComponent],
  providers: [CoursesService, PostService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
