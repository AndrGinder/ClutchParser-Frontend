import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'company-sidebar',
  templateUrl: './company-sidebar.component.html',
  styleUrls: ['./company-sidebar.component.scss']
})
export class CompanySidebarComponent {

  public route: string
  public filterForm: FormGroup
  @Input() locations: any
  @Input() mark: any
  @Output() submit: EventEmitter<any>

  constructor(private fb: FormBuilder) {
    this.route = '/company'
    this.filterForm = this.fb.group({
        mark: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
        location: ['', Validators.required]
    })
    this.submit = new EventEmitter<any>
  }

  protected validateMark(){
    const mark = this.filterForm.get('mark')
    if(mark){
      const value = mark.value

      if(value > 5){
        mark.setValue(5, { emitEvent: false })
      }
      else if(value < 0){
        mark.setValue(0, { emitEvent: false })
      }
    }
  }

  public submitFilter()
  {
    const mark = this.filterForm.get('mark')
    let markVal = 0
    if(mark){
      markVal = mark.value
    }

    const location = this.filterForm.get('link')
    let locVal = ''
    if(location){
      locVal = location.value
    }

    console.log(locVal, markVal)

    this.submit.emit({
      link: locVal,
      mark: markVal,
    })
  }

}
