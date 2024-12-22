import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Company } from '../models/company.model';
import { Observable } from 'rxjs';
import { CompanyPage } from '../models/companyPage.model';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CompanyService {

  constructor(private _httpClient: HttpClient) { }

  public getPage(url: string): Observable<CompanyPage>{
    const data = this._httpClient.get<CompanyPage>(
      `http://localhost:5000/api/company?url=${url}`,
    )
    return data
  }
}
