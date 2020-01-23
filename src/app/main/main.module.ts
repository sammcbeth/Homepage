import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ]
})
export class MainModule { }
