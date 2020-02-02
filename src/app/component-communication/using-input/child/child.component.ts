import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // receving name from parent component
  @Input() public name: string;
  constructor() { }

  ngOnInit() {
  }

}
