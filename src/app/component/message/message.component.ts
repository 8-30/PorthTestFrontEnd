import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  constructor(private messageService:MessageService,private fb: FormBuilder,) { }
  form!: FormGroup;
  messages : Message[] | undefined
  ngOnInit(): void {
    this.form = this.fb.group({
      sender: '',
      text :'',
    });

  this.messageService.getMessages().subscribe(messagesSnapshot=>{
      console.log("hola",messagesSnapshot)
      this.messages = []
      messagesSnapshot.forEach((message:any)=>{
        const newMessage = {text:message._text,sender:message._sender};
        this.messages?.push(newMessage)
      })
    })
  }
  sendMessage(){
    let newMessage = this.form?.value
    if(newMessage.sender==""){
      newMessage.sender = "Anonimo" 
    }
    if(newMessage.text ==""){
      alert("The text box its empty")
    }
    else{
      this.messages?.push(newMessage)
      this.form?.controls['text'].setValue("");
      console.log(newMessage.sender,newMessage.text)
      this.messageService.addMessage(newMessage)
    }

  }

}
