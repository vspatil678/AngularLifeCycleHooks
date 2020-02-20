import { Component, OnInit } from '@angular/core';
import { ComminicationService } from '../comminication.service';
import { ComponentOneComponent } from '../component-one/component-one.component';
@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {
  public receivedData: any;
  constructor(private communicationService: ComminicationService) {
    this.communicationService.chat.subscribe((data: any) => {
      this.receivedData = data;
    });
  }
  ngOnInit() {
  }
}
