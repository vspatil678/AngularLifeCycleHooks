import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public names: string[];
  public selectedName: string;
  constructor() { }

  ngOnInit() {
    this.names = ['Niketh', 'Siddu', 'Santosh', 'Arun', 'Barat'];
  }

  public onSelectName(name: string) {
    this.selectedName = name;
  }

}
