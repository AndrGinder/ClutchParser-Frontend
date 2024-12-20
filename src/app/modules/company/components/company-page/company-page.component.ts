import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyFilter } from 'src/app/models/companyFilter.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit{
  
  locLinks: any
  mark: number

  public dropStatus: boolean
  public sidebarVisible: boolean

  public dotnet: string
  public ecom: string
  public profile

  public url: any
  public subtitle: any
  public page: any

  constructor(private route: ActivatedRoute, private service: CompanyService){
    this.dropStatus = false
    this.sidebarVisible = false
    this.mark = 1
    this.dotnet = 'https://clutch.co/developers?focus_areas=field_pp_fw_dot_net'
    this.ecom = 'https://clutch.co/developers/ecommerce'
    this.profile = '/profile'
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => this.url = params.get('link')!)

    this.generateLinks(this.url)
    this.onPageChange(this.url)

    this.dropStatus = false
    this.sidebarVisible = false
  }

  onPageChange(params: CompanyFilter) {

    this.dropStatus = false
    this.sidebarVisible = false
    console.log(params)

    this.service.getPage(params.link, params.mark).subscribe(
      data => {
        console.log(data)
        this.page != data
      }
    )

    this.generateLinks(params.link)
  }

  public onFilterClick(){
    if(this.sidebarVisible == true){
      this.sidebarVisible = false
    }
    else if(this.sidebarVisible == false){
      this.sidebarVisible = true
    }
  }

  public onClickLocation(){
    if(this.dropStatus == true){
      this.dropStatus = false
    }
    else if(this.dropStatus == false){
      this.dropStatus = true
    }
  }

  private generateLinks(link: string): any{
    const site = 'https://clutch.co'
    const dev = '/developers'
    const ecom = '/ecommerce'
    const dotnet = '?focus_areas=field_pp_fw_dot_net'
    const loc = link.replace(site,'').replace(dev,'')
      .replace(ecom,'').replace(dotnet,'')
    const field = link.replace(site,'').replace(dev,'')
      .replace(loc,'')

    let country = ''
    switch(loc){
      case '/dk':
        this.dotnet = site + loc + dev + dotnet
        this.ecom = site + loc + dev + ecom
        country = 'Denmark'
        break
      case '/fr':
        this.dotnet = site + loc + dev + dotnet
        this.ecom = site + loc + dev + ecom
        country = 'France'
        break
      case '/nl':
        this.dotnet = site + loc + dev + dotnet
        this.ecom = site + loc + dev + ecom
        country = 'Netherlands'
        break
      case '/no':
        this.dotnet = site + loc + dev + dotnet
        this.ecom = site + loc + dev + ecom
        country = 'Norway'
        break
      case '/se':
        this.dotnet = site + loc + dev + dotnet
        this.ecom = site + loc + dev + ecom
        country = 'Sweden'
        break
      case '/ukraine':
        this.dotnet = site + dev + loc + dotnet
        this.ecom = site + '/ua' + dev + ecom
        country = 'Ukraine'
        break
      case '/uk':
        this.dotnet = site + dev + loc + dotnet
        this.ecom = site + dev + loc + ecom
        country = 'United Kingdom'
        break
      default: 
        this.dotnet = site + loc + dev + dotnet
        this.ecom = site + loc + dev + ecom
        break
    }

    let subtitleField = ''

    switch(field){
      case ecom:
        subtitleField = 'E-Commerce Development Firms'
        this.locLinks = [
          {
            name: 'Denmark',
            link: 'https://clutch.co/dk/developers/ecommerce',
            img: '../../../assets/flags/denmark.png'
          }, {
            name: 'France',
            link: 'https://clutch.co/fr/developers/ecommerce',
            img: '../../../assets/flags/france.png'
          }, {
            name: 'Netherlands',
            link: 'https://clutch.co/nl/developers/ecommerce',
            img: '../../../assets/flags/france.png'
          }, {
            name: 'Norway',
            link: 'https://clutch.co/no/developers/ecommerce',
            img: '../../../assets/flags/norway.png'
          }, {
            name: 'Sweden',
            link: 'https://clutch.co/se/developers/ecommerce',
            img: '../../../assets/flags/sweden.png'
          }, {
            name: 'Ukraine',
            link: 'https://clutch.co/ua/developers/ecommerce',
            img: '../../../assets/flags/ukraine.png'
          }, {
            name: 'United Kingdom',
            link: 'https://clutch.co/developers/ecommerce/uk',
            img: '../../../assets/flags/uk.png'
          },
        ]
        break
      case dotnet:
        subtitleField = 'Custom Software Development Companies'
        this.locLinks = [
          {
            name: 'Denmark',
            link: 'https://clutch.co/dk/developers?focus_areas=field_pp_fw_dot_net',
            img: '../../../assets/flags/denmark.png'
          }, {
            name: 'France',
            link: 'https://clutch.co/fr/developers?focus_areas=field_pp_fw_dot_net',
            img: '../../../assets/flags/france.png'
          }, {
            name: 'Netherlands',
            link: 'https://clutch.co/nl/developers?focus_areas=field_pp_fw_dot_net',
            img: '../../../assets/flags/france.png'
          }, {
            name: 'Norway',
            link: 'https://clutch.co/no/developers?focus_areas=field_pp_fw_dot_net',
            img: '../../../assets/flags/norway.png'
          }, {
            name: 'Sweden',
            link: 'https://clutch.co/se/developers?focus_areas=field_pp_fw_dot_net',
            img: '../../../assets/flags/sweden.png'
          }, {
            name: 'Ukraine',
            link: 'https://clutch.co/developers/ukraine?focus_areas=field_pp_fw_dot_net',
            img: '../../../assets/flags/ukraine.png'
          }, {
            name: 'United Kingdom',
            link: 'https://clutch.co/developers/uk?focus_areas=field_pp_fw_dot_net',
            img: '../../../assets/flags/uk.png'
          },
        ]
        break
    }
    this.subtitle = `List of the Top ${country} ${subtitleField}`
  }
}
