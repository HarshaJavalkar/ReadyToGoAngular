import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GetTemplateService {
  constructor(public http: HttpClient) {}

  getTemplates(): Observable<any> {
    return this.http.get(
      'https://www.canva.com/design/DAFIzrSOKKM/eF1F_Q3wb-fZXkBOqcgRIw/view?mode=prototype'
    );
  }
}
