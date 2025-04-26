// src/app/services/movie.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://www.omdbapi.com/?apikey=2bda8116'; // example

  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}&s=${query}`);
  }
}
