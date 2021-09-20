import { BrowserModule } from "@angular/platform-browser";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";

import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";
import { CourseComponent } from "./course/course.component";
import { CoursesService } from "./courses.service";
import { FormsModule } from "@angular/forms";
import { SummaryPipe } from "./summary.pipe";
import { FavoriteComponent } from "./favorite/favorite.component";
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    InputFormatDirective,
    ContactFormComponent,
  ],
  imports: [BrowserModule, FormsModule],
  exports: [CourseComponent],
  providers: [CoursesService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
