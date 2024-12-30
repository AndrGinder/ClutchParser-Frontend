import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { CompanyRoutingModule } from './company-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanySidebarComponent } from './components/company-sidebar/company-sidebar.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyNotFoundComponent } from './components/company-not-found/company-not-found.component';

@NgModule({
  declarations: [
    CompanyPageComponent,
    CompanySidebarComponent,
    CompanyListComponent,
    CompanyNotFoundComponent
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
