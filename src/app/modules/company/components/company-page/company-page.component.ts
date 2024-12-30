import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit{

  public dropStatus: boolean = false
  public sidebarVisible: boolean = false

  public dotnet: string = 'https://clutch.co/developers?focus_areas=field_pp_fw_dot_net&mark=5'
  public ecom: any
  public locLinks: any
  public mark: any

  public url: any
  public pageNumber: any
  public subtitle: any
  public page: any

  constructor(private route: ActivatedRoute, private service: CompanyService){}

  ngOnInit(): void {
    
    this.route.queryParamMap.subscribe(params => {
      this.url = params.get('link')!
      this.pageNumber = params.get('page')!
      this.mark = params.get('mark')!
    })
    const link = this.url.replace(/\?mark=\d+/, '').replace(/\&mark=\d+/, '')

    this.mark = Number(this.url.replace(link + '?mark=' , '').replace(link + '&mark=' , ''))

    this.dropStatus = false
    this.sidebarVisible = false

    this.generateLinks(this.url)
    this.onPageChange(this.url)
  }

  onPageChange(link: string) {
    this.dropStatus = false
    this.sidebarVisible = false
    this.service.getPage(link).subscribe(data => this.page = data)
  }

  public onFilterClick(){
    if(this.sidebarVisible == true){
      this.sidebarVisible = false
    }
    else if(this.sidebarVisible == false){
      this.sidebarVisible = true
    }
  }

  private generateLinks(link: string){
    const site = 'https://clutch.co'
    const dev = '/developers'
    const ecom = '/ecommerce'
    const dotnet = '?focus_areas=field_pp_fw_dot_net'

    const loc = link.replace(site, '').replace(dev,' ')
      .replace(ecom,'').replace(dotnet,'')
      .replace(/\?mark=\d+/, '').replace(/\&mark=\d+/, '')
    const field = link.replace(site, '').replace(loc, '').replace(dev, '')
      .replace(/\?mark=\d+/, '').replace(/\&mark=\d+/, '')
    console.log(field)

    let country = ''
    switch(loc){
      case '/dk':
        this.dotnet = `${site}${loc}${dev}${dotnet}&mark=${this.mark}`
        this.ecom = `${site}${loc}${dev}${ecom}&mark=${this.mark}`
        country = 'Denmark'
        break
      case '/fr':
        this.dotnet = `${site}${loc}${dev}${dotnet}&mark=${this.mark}`
        this.ecom = `${site}${loc}${dev}${ecom}&mark=${this.mark}`
        country = 'France'
        break
      case '/nl':
        this.dotnet = `${site}${loc}${dev}${dotnet}&mark=${this.mark}`
        this.ecom = `${site}${loc}${dev}${ecom}&mark=${this.mark}`
        country = 'Netherlands'
        break
      case '/no':
        this.dotnet = `${site}${loc}${dev}${dotnet}&mark=${this.mark}`
        this.ecom = `${site}${loc}${dev}${ecom}&mark=${this.mark}`
        country = 'Norway'
        break
      case '/se':
        this.dotnet = `${site}${loc}${dev}${dotnet}&mark=${this.mark}`
        this.ecom = `${site}${loc}${dev}${ecom}&mark=${this.mark}`
        country = 'Sweden'
        break
      case '/ukraine':
      case '/ua':
        this.dotnet = `${site}${loc}${dev}${dotnet}&mark=${this.mark}`
        this.ecom = `${site}/ua${dev}${ecom}&mark=${this.mark}`
        country = 'Ukraine'
        break
      case '/uk':
        this.dotnet = `${site}${dev}${loc}${dotnet}&mark=${this.mark}`
        this.ecom = `${site}${dev}${loc}${ecom}&mark=${this.mark}`
        country = 'United Kingdom'
        break
      default: 
        this.dotnet = `${site}${dev}${dotnet}&mark=${this.mark}`
        this.ecom = `${site}${dev}${ecom}&mark=${this.mark}`
        break
    }

    let subtitleField = ''

    switch(field){
      case ecom:
        subtitleField = 'E-Commerce Development Firms'
        this.locLinks = [
          {
            name: 'Select company location',
            link: `https://clutch.co/developers/ecommerce`,
            img: ''
          }, {
            name: 'Denmark',
            link: `https://clutch.co/dk/developers/ecommerce`,
            img: '../../../assets/flags/denmark.png'
          }, {
            name: 'France',
            link: `https://clutch.co/fr/developers/ecommerce`,
            img: '../../../assets/flags/france.png'
          }, {
            name: 'Netherlands',
            link: `https://clutch.co/nl/developers/ecommerce`,
            img: '../../../assets/flags/france.png'
          }, {
            name: 'Norway',
            link: `https://clutch.co/no/developers/ecommerce`,
            img: '../../../assets/flags/norway.png'
          }, {
            name: 'Sweden',
            link: `https://clutch.co/se/developers/ecommerce`,
            img: '../../../assets/flags/sweden.png'
          }, {
            name: 'Ukraine',
            link: `https://clutch.co/ua/developers/ecommerce`,
            img: '../../../assets/flags/ukraine.png'
          }, {
            name: 'United Kingdom',
            link: `https://clutch.co/developers/ecommerce/uk`,
            img: '../../../assets/flags/uk.png'
          },
        ]
        break
      case dotnet:
        subtitleField = 'Custom Software Development Companies'
        this.locLinks = [
          {
            name: 'Select company location',
            link: `https://clutch.co/developers?focus_areas=field_pp_fw_dot_net`,
            img: ''
          }, {
            name: 'Denmark',
            link: `https://clutch.co/dk/developers?focus_areas=field_pp_fw_dot_net`,
            img: '../../../assets/flags/denmark.png'
          }, {
            name: 'France',
            link: `https://clutch.co/fr/developers?focus_areas=field_pp_fw_dot_net`,
            img: '../../../assets/flags/france.png'
          }, {
            name: 'Netherlands',
            link: `https://clutch.co/nl/developers?focus_areas=field_pp_fw_dot_net`,
            img: '../../../assets/flags/france.png'
          }, {
            name: 'Norway',
            link: `https://clutch.co/no/developers?focus_areas=field_pp_fw_dot_net`,
            img: '../../../assets/flags/norway.png'
          }, {
            name: 'Sweden',
            link: `https://clutch.co/se/developers?focus_areas=field_pp_fw_dot_net`,
            img: '../../../assets/flags/sweden.png'
          }, {
            name: 'Ukraine',
            link: `https://clutch.co/developers/ukraine?focus_areas=field_pp_fw_dot_net`,
            img: '../../../assets/flags/ukraine.png'
          }, {
            name: 'United Kingdom',
            link: `https://clutch.co/developers/uk?focus_areas=field_pp_fw_dot_net`,
            img: '../../../assets/flags/uk.png'
          },
        ]
        break
    }
    this.subtitle = `List of the Top ${country} ${subtitleField}`
  }
}
