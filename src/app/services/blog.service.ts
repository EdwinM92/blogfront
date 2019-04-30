import { Injectable } from '@angular/core';
//variables nuevas
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl: string = '/home/api/blog/';

  constructor(private http: HttpClient) {}

  getBlog(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBlogs() {
    return this.getBlog;
  }

  getBloge(id) {
    return this.getBlog[id];
  }
}
