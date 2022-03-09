import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IWorkElement } from '../models/work.model';

@Injectable({
  providedIn: 'root'
})
export class OverviewResolver implements Resolve<IWorkElement[]> {
  workDataUrl: string = './assets/data/work.json';

  constructor(private http: HttpClient) {}

  resolve(): Observable<IWorkElement[]> {
    return this.http.get<IWorkElement[]>(this.workDataUrl);
  }
}
