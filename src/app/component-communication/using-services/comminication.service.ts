import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComminicationService {
  // we can use any type os subject or event emitter for communication
  public chat = new Subject<any>();
  constructor() {
  }
}
