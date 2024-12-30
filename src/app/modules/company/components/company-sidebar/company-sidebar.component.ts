import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'company-sidebar',
  templateUrl: './company-sidebar.component.html',
  styleUrls: ['./company-sidebar.component.scss']
})
export class CompanySidebarComponent {

  public route: string = '/company'
  public filterForm: FormGroup = this.fb.group({})
  public locations: any

  @Input() mark: any
  @Input() url: string = ''
  @Input() reviewed: boolean = false
  @Output() submit: EventEmitter<any> = new EventEmitter<any>()

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(){
    this.generateLinks()
    this.filterForm = this.fb.group({
      mark: [this.mark, [Validators.required, Validators.min(1), Validators.max(5)]],
      location: [this.locations[0]!.link, Validators.required]
    })
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
    const markVal = mark ? mark.value : 0;

    const location = this.filterForm.get('location');
    const locVal = location && location.value !== '' 
      ? location.value 
      : this.url

    const pageParam = locVal.includes('?') ? '&' : '?'
    const link = `${locVal}${pageParam}mark=${markVal}`

    this.url = link
    this.mark = markVal

    this.router.navigate([this.route], {
      queryParams: {
        link: link,
      }
    });
    this.submit.emit(link)
  }

  private generateLinks(){
    const site = 'https://clutch.co'
    const dev = '/developers'
    const ecom = '/ecommerce'
    const dotnet = '?focus_areas=field_pp_fw_dot_net'

    const loc = this.url.replace(site, '').replace(dev,' ')
      .replace(ecom,'').replace(dotnet,'')
      .replace(/\?mark=\d+/, '').replace(/\&mark=\d+/, '')
    const field = this.url.replace(site, '').replace(loc, '').replace(dev, '')
      .replace(/\?mark=\d+/, '').replace(/\&mark=\d+/, '')

    switch(field){
      case ecom:
        this.locations = [{
            name: 'Select company location',
            link: `https://clutch.co/developers/ecommerce`,
          }, {
            name: 'Denmark',
            link: `https://clutch.co/dk/developers/ecommerce`,
          }, {
            name: 'France',
            link: `https://clutch.co/fr/developers/ecommerce`,
          }, {
            name: 'Netherlands',
            link: `https://clutch.co/nl/developers/ecommerce`,
          }, {
            name: 'Norway',
            link: `https://clutch.co/no/developers/ecommerce`,
          }, {
            name: 'Sweden',
            link: `https://clutch.co/se/developers/ecommerce`,
          }, {
            name: 'Ukraine',
            link: `https://clutch.co/ua/developers/ecommerce`,
          }, {
            name: 'United Kingdom',
            link: `https://clutch.co/developers/ecommerce/uk`,
          },
        ]; break
      case dotnet:
        this.locations = [{
            name: 'Select company location',
            link: `https://clutch.co/developers?focus_areas=field_pp_fw_dot_net`,
          }, {
            name: 'Denmark',
            link: `https://clutch.co/dk/developers?focus_areas=field_pp_fw_dot_net`,
          }, {
            name: 'France',
            link: `https://clutch.co/fr/developers?focus_areas=field_pp_fw_dot_net`,
          }, {
            name: 'Netherlands',
            link: `https://clutch.co/nl/developers?focus_areas=field_pp_fw_dot_net`,
          }, {
            name: 'Norway',
            link: `https://clutch.co/no/developers?focus_areas=field_pp_fw_dot_net`,
          }, {
            name: 'Sweden',
            link: `https://clutch.co/se/developers?focus_areas=field_pp_fw_dot_net`,
          }, {
            name: 'Ukraine',
            link: `https://clutch.co/developers/ukraine?focus_areas=field_pp_fw_dot_net`,
          }, {
            name: 'United Kingdom',
            link: `https://clutch.co/developers/uk?focus_areas=field_pp_fw_dot_net`,
          },
        ]; break
    }
  }

}