import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private inj: Injector) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(0),
      catchError((res: HttpErrorResponse) => {
        const toastr = this.inj.get(ToastrService);
        const router = this.inj.get(Router);
        if (res.status === 401) {
          localStorage.clear();
          toastr.error(
            'Session Expired or Invalid Token, try to login again.',
            'Unauthorized!'
          );
          router.navigate(['/auth/login']);
        } else if (res.status >= 500) {
          toastr.error("Sorry! It's not you, it's us!", 'Server Error!');
        } else {
          let errorMessage = '';
          if (res.error instanceof ErrorEvent) {
            errorMessage = `Error: ${res.error.message}`;
          } else {
            errorMessage = res.error.error;
          }

          toastr.error(errorMessage, 'Error!');
        }

        return new Observable<HttpEvent<any>>();
      })
    );
  }
}
