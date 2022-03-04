import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import{MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
