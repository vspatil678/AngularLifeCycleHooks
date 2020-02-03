import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-out',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildOutComponent implements OnInit {

  @Output() votedFor = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  public onBjp() {
      this.votedFor.emit('bjp');
  }

  public onCongrss() {
  this.votedFor.emit('congress');
  }

  public onJds() {
    this.votedFor.emit('jds');
  }

}
