import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-out',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentOutputComponent implements OnInit {

  public bjpCount = 0;
  public congressCount = 0;
  public jdsCount = 0;

  constructor() { }

  ngOnInit() {
  }

  public onVoteReceive(event: any) {
    if (event === 'bjp') {
      this.bjpCount = this.bjpCount + 1;
    } else if (event === 'congress') {
      this.congressCount = this.congressCount + 1;
    } else if (event === 'jds') {
      this.jdsCount = this.jdsCount + 1;
    }
  }

}
