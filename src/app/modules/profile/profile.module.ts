import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ProfileRoutingModule } from './profile.routing-module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    ProfilePageComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ProfileRoutingModule,
  ]
})
export class ProfileModule { }
