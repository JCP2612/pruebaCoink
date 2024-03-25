import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetPayloadService {
  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get<any>(environment.backendApi2);
  }
}

export const getGenderResolve: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<any> => {
  return inject(GetPayloadService)
    .getData()
    .pipe(
      map((res: any) => {
        if (!res.payload) return res;
        return [
          {
            id: 1,
            notation: 'M',
            description: 'Masculino',
          },
          {
            id: 2,
            notation: 'F',
            description: 'Femenino',
          },
        ];
      })
    );
};
