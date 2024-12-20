import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'filterBar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent {

  public filterForm = new FormGroup({
    mark: new FormControl(0),
    location: new FormControl('All locations')
  })







  @Input() mark: any
  @Output() pageChange = new EventEmitter<any>()

  route = '/company'
  
  public onPageChange(mark: number){
    this.pageChange.emit(mark)
  }
}
