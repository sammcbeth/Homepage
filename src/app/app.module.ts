import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { InterestsComponent } from './interests/interests.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'interests',
    component: InterestsComponent
  },
]


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ResumeComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MainModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






