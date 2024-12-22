import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CompanyFilter } from 'src/app/models/companyFilter.model';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() mark: any
  @Input() startPage: any
  @Input() previousPage: any
  @Input() currentPage: any
  @Input() nextPage: any
  @Input() lastPage: any
  @Output() pageChange = new EventEmitter<any>()

  public onPageChange(link: string){
    this.pageChange.emit(link)
  }
}
