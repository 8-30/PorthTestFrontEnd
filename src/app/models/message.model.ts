
export class Message {
  sender: string;
  text: string;

  constructor(message: Message) {
    this.sender = message.sender;
    this.text = message.text;

  }
}
