export class Message {
  constructor(message) {
    this.to = message.to;
    this.from = message.from;
    this.time = message.time;
    this.exacttime = message.exacttime;
    this.text = message.text;
  }
}
