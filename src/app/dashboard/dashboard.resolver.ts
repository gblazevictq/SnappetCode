import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IWorkElement } from '../models/work.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolver implements Resolve<IWorkElement[]> {
  workDataUrl: string = './assets/data/work.json';

  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IWorkElement[]> {
    return this.http.get<IWorkElement[]>(this.workDataUrl);
  }
}
