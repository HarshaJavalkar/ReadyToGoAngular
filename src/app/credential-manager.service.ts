import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CredentialManagerService {
  private subject = new Subject<any>();

  constructor(private hc: HttpClient) {}

  loginUser(loginObj: any): Observable<any> {
    return this.hc.post('/user/login', loginObj);
  }
  sendloginState(loginState: any) {
    this.subject.next(loginState);
  }
  createUser(userObj: any): Observable<any> {
    return this.hc.post('/user/createuser', userObj);
  }
}
