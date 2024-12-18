import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { CompanyRoutingModule } from './company-routing.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    CompanyPageComponent,
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    LayoutModule,
  ],
  exports: [
    CompanyPageComponent,
  ],
  providers: []
})
export class CompanyModule { }
