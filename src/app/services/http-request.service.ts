import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { S3Image } from '../models/S3Image';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  public baseUrl: string;
  constructor(public _http: HttpClient) {
    this.baseUrl = 'http://localhost:3700';
  }

  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);

    return this._http.post(`${this.baseUrl}/uploadImageToS3`, formData);
  }

  getTags(): Observable<Tag[]> {
    return this._http.get<Tag[]>(`${this.baseUrl}/TagsOrderByQuantity`);
  }

  getImagesByTag(tagName: string): Observable<S3Image[]> {
    return this._http.get<S3Image[]>(`${this.baseUrl}/ImagesByTag/${tagName}`);
  }

  getImages(limit: number = 1000): Observable<S3Image[]> {
    return this._http.get<S3Image[]>(`${this.baseUrl}/Images/${limit}`);
  }
}
