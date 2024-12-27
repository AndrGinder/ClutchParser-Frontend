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
  @Input() dotnetLink: any
  @Input() ecomLink: any
  @Output() pageChange = new EventEmitter<any>()
  
  public onPageChange(link: string){
    this.pageChange.emit(link)
  }
}
