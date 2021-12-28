import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class HttpHeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): import('rxjs').Observable<HttpEvent<any>> {
    const modfication: any = {};
    modfication.url = `${environment.apiEndPoint}${req.url}`;
    const token = localStorage.getItem('token');
    if (token) {
      modfication.headers = req.headers.set('Authorization', `Bearer ${token}`);
    }
    return next.handle(req.clone(modfication));
  }
}
