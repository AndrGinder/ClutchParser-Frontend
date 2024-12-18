import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CompanyService]
})
export class ProfileRoutingModule { }
