import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyPageComponent } from './modules/company/components/company-page/company-page.component';
import { ProfilePageComponent } from './modules/profile/components/profile-page/profile-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    title: '.NET Companies',
    path: 'company',
    component: CompanyPageComponent,
  },
  {
    title: 'ECommerce Companies',
    path: 'company',
    component: CompanyPageComponent,
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
