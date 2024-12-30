import { Component, Input } from '@angular/core';

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent {
  public profile = '/profile'
  @Input() companies: any
}
