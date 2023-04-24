import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, catchError, throwError, finalize } from "rxjs";
import { AuthService } from "../auth-service/auth.service";

@Injectable({
  providedIn: 'root',
})
export class
AuthInterceptorService implements HttpInterceptor {
  private requestCount = 0;

  //TODO ERROR SERVICE
  // constructor(private authService: AuthService, private errorHandler: ErrorService) {}
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.requestCount++;
      // todo add loading spinner

      if (req.url.toLowerCase().endsWith('web/login')) {
          req = req.clone({ responseType: 'text' });
      } else {
          // if (env.authenticate) {
              req = req.clone({
                  headers: req.headers.set('Authorization', 'Bearer ' + this.authService.getAccessToken()),
              });
          // }
      }

      return next.handle(req).pipe(
          map((event: HttpEvent<any>) => event),
          catchError((error: HttpErrorResponse) => {
              const message = error.message;
              // this.errorHandler.handleResponseError(error);
              return throwError(error);
          }),
          finalize(() => {
              this.requestCount--;
              if (this.requestCount === 0) {
                  //disable spinner
              }
          })
      );
  }
}
