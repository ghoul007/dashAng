import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class GiphyDataService {
  private KEY = '5jWOi8C4XAwNa6k66xVjyHe30dOAyMSh';

  constructor(private http: HttpClient) { }

  getGiphyImages(q: string) {
    const params = new HttpParams()
    .set('q', q)
    .set('limit', '100')
    .set('api_key', this.KEY);
    return this.http.get('//api.giphy.com/v1/gifs/search', { params: params })
      .pipe(map(response => response['data']));
  }


  mapDataFromApi(response) { }

}
