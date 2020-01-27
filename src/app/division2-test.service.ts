import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Division2TestService {

  constructor(private http: HttpClient) { }

  public getTechnologyList() {
    return this.http.get('https://api.myjson.com/bins/195hma');
  }

  public pushNewTechnology(params): Observable<any> {
    return this.http.put('https://api.myjson.com/bins/195hma', params).pipe();
  }
}
