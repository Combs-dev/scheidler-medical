import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { StaffComponent } from './staff.component';

@NgModule({
  declarations: [StaffComponent],
  imports: [
    CardModule,
    CarouselModule,
    CommonModule,
    DividerModule,
    RouterModule.forChild([{ path: '', component: StaffComponent }]),
  ],
})
export class StaffModule {}
