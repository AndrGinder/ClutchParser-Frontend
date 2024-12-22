import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CompanyFilter } from 'src/app/models/companyFilter.model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public homeRoute: string = ''
  public companyRoute : string = '/company'
  public dotnetLink: string = 'https://clutch.co/developers?focus_areas=field_pp_fw_dot_net&mark=5'
  public ecomLink: string = 'https://clutch.co/developers/ecommerce?mark=5'
  @Output() pageChange = new EventEmitter<any>()
  
  public onPageChange(link: string){
    this.pageChange.emit(link)
  }
}
