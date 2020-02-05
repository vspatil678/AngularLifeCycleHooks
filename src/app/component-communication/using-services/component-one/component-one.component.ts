import { Component, OnInit } from '@angular/core';
import { ComminicationService } from '../comminication.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  constructor(private communicationService: ComminicationService) { }

  ngOnInit() {
  }

  public onSendName(data: string) {
    this.communicationService.chat.next(data + ' from component one');
  }

}
