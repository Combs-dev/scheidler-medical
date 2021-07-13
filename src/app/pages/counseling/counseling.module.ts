import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounselingComponent } from './counseling.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CounselingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CounselingComponent }]),
  ],
})
export class CounselingModule {}
