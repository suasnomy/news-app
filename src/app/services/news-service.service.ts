import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseApiURL,API_KEY } from 'environments/environment';
baseApiURL
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http: HttpClient) { }

  getNews(requestString: string){
    return this.http.get<any>(
      `${baseApiURL}${requestString}&apiKey=${API_KEY}`
    )
  }
}
