import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'company-sidebar',
  templateUrl: './company-sidebar.component.html',
  styleUrls: ['./company-sidebar.component.scss']
})
export class CompanySidebarComponent {

  public route: string;
  public filterForm: FormGroup;
  @Input() locations: any;
  @Input() mark: any;
  @Input() url: any;
  @Output() submit: EventEmitter<any>;

  constructor(private fb: FormBuilder, private router: Router) {
    this.route = '/company';
    this.filterForm = this.fb.group({
      mark: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
      location: ['', Validators.required]
    });
    this.submit = new EventEmitter<any>();
  }

  ngOnInit(){
    this.filterForm = this.fb.group({
      mark: [this.mark, [Validators.required, Validators.min(1), Validators.max(5)]],
      location: [this.locations[0]?.link, Validators.required]
    });
  }

  protected validateMark() {
    const mark = this.filterForm.get('mark');
    if (mark) {
      const value = mark.value;

      if (value > 5) {
        mark.setValue(5, { emitEvent: false });
      } else if (value < 0) {
        mark.setValue(0, { emitEvent: false });
      }
    }
  }

  public submitFilter() {
    
    const mark = this.filterForm.get('mark');
    let markVal = 0;
    if (mark) {
      markVal = mark.value;
    }

    const location = this.filterForm.get('location');
    let locVal = this.url;
    if (location && location.value !== '') {
      locVal = location.value;
    }

    let link: any
    if(locVal.includes('/ecommerce')){
      link = locVal + `?mark=${markVal}`
    } else if(locVal.includes('?focus_areas=field_pp_fw_dot_net')){
      link = locVal + `&mark=${markVal}`
      this.submit.emit(locVal + `&mark=${markVal}`)
    }

    this.url = link
    this.mark = markVal

    this.router.navigate([this.route], {
      queryParams: {
        link: link,
        mark: markVal
      }
    });
    this.submit.emit(link)
  }

}
