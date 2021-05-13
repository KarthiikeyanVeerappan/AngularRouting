import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { DataService} from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultyComponent } from './faculty/faculty.component';
import { CourseComponent } from './course/course.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseAvailableComponent } from './course-available/course-available.component';
import { CourseNotAvailableComponent } from './course-not-available/course-not-available.component';

const appRoutes: Routes = [
  { path: 'Faculty', component: FacultyComponent },
  { path: 'Course', component: CourseComponent },
  { path: 'CourseAvailable', component: CourseAvailableComponent },
  { path: 'CourseNotAvailable', component: CourseNotAvailableComponent },
  { path: '', redirectTo: '/Faculty', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FacultyComponent,
    CourseComponent,
    PageNotFoundComponent,
    CourseAvailableComponent,
    CourseNotAvailableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
