import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'services',
    loadChildren: () =>
      import('./pages/services/services.module').then((m) => m.ServicesModule),
  },
  {
    path: 'story',
    loadChildren: () =>
      import('./pages/story/story.module').then((m) => m.StoryModule),
  },
  {
    path: 'staff',
    loadChildren: () =>
      import('./pages/staff/staff.module').then((m) => m.StaffModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./pages/forms/forms.module').then((m) => m.FormsModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
