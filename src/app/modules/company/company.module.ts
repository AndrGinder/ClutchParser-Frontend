import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { CompanyRoutingModule } from './company-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { LocationBarComponent } from './components/location-bar/location-bar.component';
import { CompanySidebarComponent } from './components/company-sidebar/company-sidebar.component';

@NgModule({
  declarations: [
    CompanyPageComponent,
    LocationBarComponent,
    FilterBarComponent,
    CompanySidebarComponent,
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    LayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    CompanyPageComponent,
  ],
  providers: []
})
export class CompanyModule { }
