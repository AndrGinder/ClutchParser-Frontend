import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit{
  url: string = ''
  page: any
  protected dotnet = 'https://clutch.co/developers?focus_areas=field_pp_fw_dot_net'
  protected ecom = 'https://clutch.co/developers/ecommerce'

  constructor(private route: ActivatedRoute, 
    private service: ProfileService){}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.url = params.get('link')!
    })
    this.onPageChange(this.url)
  }

  onPageChange(link: string) {
    this.service.getPage(link).subscribe(data => this.page = data)
  }
}
