import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: { text: string, type: 'error' | 'info' }[] = [];

  add(message: string | object, type: 'error' | 'info' = 'info') {
    if (typeof message === 'string') {
      this.messages.push({ text: message, type });
    } else {
      const messageString = JSON.stringify(message);
      this.messages.push({ text: messageString, type });
    }
  }
  

  clear(index: number) {
    this.messages.splice(index, 1);
  }
  
}
