import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/postal.models';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://api.example.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}


