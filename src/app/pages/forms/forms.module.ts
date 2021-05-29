import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';

@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FormsComponent }]),
  ],
})
export class FormsModule {}
