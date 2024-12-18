import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProfilePage } from '../models/profilePage.model';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProfileService {

  constructor(private _httpClient: HttpClient) { }

  public getPage(url: string): Observable<ProfilePage>{
    return this._httpClient.get<ProfilePage>(`http://localhost:5000/api/review?url=${url}`)
  }
}
