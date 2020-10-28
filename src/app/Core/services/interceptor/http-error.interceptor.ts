import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
export const InterceptorSkipHeader = 'X-Skip-Interceptor';

export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private toastr: ToastrService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.headers.has(InterceptorSkipHeader)) {
      const headers = request.headers.delete(InterceptorSkipHeader);
      return next.handle(request.clone({ headers }));
    }

    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorTitle = '';
          let errorMessage = '';
          if (error.error) {
            errorTitle = 'Wystąpił błąd!';
            errorMessage =  error.error.error;
            this.toastr.error(errorMessage, errorTitle);
          } else {
            errorTitle = `Kod błędu: ${error.status}`;
            errorMessage = `Wiadomość: ${error.message}`;
            this.toastr.error(errorMessage, errorTitle);
          }
          return throwError(errorMessage);
        })
      );
  }
}
