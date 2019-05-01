import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokeService {

  public pokeEndopoint = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  public getPoke(name: String): Observable<any> {
    return this.http.get(this.pokeEndopoint + 'pokemon/' + name);
  }

}