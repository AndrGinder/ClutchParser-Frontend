import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'company-sidebar',
  templateUrl: './company-sidebar.component.html',
  styleUrls: ['./company-sidebar.component.scss']
})
export class CompanySidebarComponent {

  public filterForm = new FormGroup({
      mark: new FormControl(0),
      location: new FormControl('')
    })

  @Input() locations: any

}
