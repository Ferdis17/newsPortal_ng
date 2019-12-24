import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  API_KEY = '948a0a04f57542d3a422056d71be0ed0';
  baseUrl = 'https://newsapi.org/v2/top-headlines';

  public getNews(){
    return this.httpClient.get(this.baseUrl+`?country=us&apiKey=${this.API_KEY}`);
  }
  
}
