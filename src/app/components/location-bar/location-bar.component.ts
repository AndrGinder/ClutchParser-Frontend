import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'locationBar',
  templateUrl: './location-bar.component.html',
  styleUrls: ['./location-bar.component.scss']
})
export class LocationBarComponent {
  @Input() links: any
  @Output() pageChange = new EventEmitter<any>()

  route = '/company'
  
  public onPageChange(link: string){
    this.pageChange.emit(link)
  }
}
