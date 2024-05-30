import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http: HttpClient) {}

  downloadPDF(): Observable<Blob> {
    return this.http.get('/assets/images/brian_freijomil_cv.pdf', { responseType: 'blob' });
  }
}
