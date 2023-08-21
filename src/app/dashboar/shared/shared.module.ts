import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    NgChartsModule,
    MatSnackBarModule,
  ],
  exports: [
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    NgChartsModule,
    MatSnackBarModule,
  ],
})
export class SharedModule {}
