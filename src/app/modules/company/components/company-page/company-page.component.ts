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

  public dotnet: any
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
    this.sidebarVisible = false

    this.generateLinks(this.url)
    this.onPageChange(this.url)
  }

  onPageChange(link: string) {
    this.sidebarVisible = false
    this.service.getPage(link).subscribe(data => this.page = data)
  }

  public onFilterClick(){
    this.sidebarVisible = !this.sidebarVisible
  }

  private generateLinks(link: string){
    const site = 'https://clutch.co'
    const dev = '/developers'
    const ecom = '/ecommerce'
    const dotnet = '?focus_areas=field_pp_fw_dot_net'

    const loc = link.replace(site, '').replace(dev,' ').replace(ecom,'')
      .replace(dotnet,'').replace(/\?mark=\d+/, '').replace(/\&mark=\d+/, '')
    const field = link.replace(site, '').replace(loc, '').replace(dev, '')
      .replace(/\?mark=\d+/, '').replace(/\&mark=\d+/, '')

    let country = ''
    switch(loc){
      case '/dk':
        country = 'Denmark'; break
      case '/fr':
        country = 'France'; break
      case '/nl':
        country = 'Netherlands'; break
      case '/no':
        country = 'Norway'; break
      case '/se':
        country = 'Sweden'; break
      case '/ukraine':
      case '/ua':
        country = 'Ukraine'; break
      case '/uk':
        country = 'United Kingdom'; break
    }

    switch(field){
      case ecom:
        this.subtitle = `List of the Top ${country} E-Commerce Development Firms`; break
      case dotnet:
        this.subtitle = `List of the Top ${country} Custom Software Development Companies`; break
    }
    
  }
}
