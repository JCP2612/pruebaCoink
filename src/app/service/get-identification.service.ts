import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetIdentificationService {
  constructor(private _http: HttpClient) {}

  public getData(): Observable<any> {
    return this._http.get<any>(environment.backendApi);
  }
}

export const getIdentificationResolve: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<any> => {
  return inject(GetIdentificationService).getData();
};
