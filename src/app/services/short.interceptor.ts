import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = "85b9ee20d040a1ffa5587e0a7b189d92d7e7e683"
    request.clone({ setHeaders: { Authorization: "Bearer " + TOKEN } })

    return next.handle(request);
  }
}
