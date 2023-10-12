import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  constructor(private http: HttpClient) { }

  token: string = "85b9ee20d040a1ffa5587e0a7b189d92d7e7e683"
  url: string = "https://api-ssl.bitly.com/v4/shorten"

  getShortUrl(urlToShort: string): Observable<any> {
    const tokenHeader = new HttpHeaders({ Authorization: "Bearer " + this.token })

    return this.http.post(this.url, { long_url: urlToShort }, { headers: tokenHeader })
  }
}
