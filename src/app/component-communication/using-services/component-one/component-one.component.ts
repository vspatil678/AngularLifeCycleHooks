import { Component, OnInit } from '@angular/core';
import { ComminicationService } from '../comminication.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  // public wecanSubscribeAnywhere: any;
  constructor(private communicationService: ComminicationService) {
    // this.communicationService.chat.subscribe((data) => { this.wecanSubscribeAnywhere = data; });
  }


  ngOnInit() {
  }

  public onSendName(data: string) {
    this.communicationService.chat.next(data + ' from component one');
  }

}
