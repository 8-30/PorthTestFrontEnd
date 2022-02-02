import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';





@Injectable({
  providedIn: 'root'
})

export class MessageService {
  constructor(
    private http: HttpClient,
    
  ) { }

  private messagesApiUrl = 'http://localhost:3000/api/messages';  

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.messagesApiUrl)
  }
  addMessage(message: Message){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }


    return this.http.post(this.messagesApiUrl, message,options)
    .subscribe();
  }
  
}
