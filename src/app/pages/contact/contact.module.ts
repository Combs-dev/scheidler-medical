import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GMapModule } from 'primeng/gmap';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    GMapModule,
    RouterModule.forChild([{ path: '', component: ContactComponent }]),
  ],
})
export class ContactModule {}
