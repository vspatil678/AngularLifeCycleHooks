import { Component, OnInit } from '@angular/core';
import { Comments } from '../comments';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  public comments: Comments[];
  constructor() {
    this.comments = [
      // tslint:disable-next-line:max-line-length
      new Comments('Comment Title-1', 'So the ngOnInit() method will be called after each initialization of the component or only the first time ?'),
      // tslint:disable-next-line:max-line-length
      new Comments('Comment Title-2', 'You said that constructor mainly initialize fields member but you said that you can initialize some fields in the ngOnInit too, what the difference between these two initializations ?'),
    ];
   }

  ngOnInit() {
  }

  addComment() {
    this.comments.unshift(new Comments('Comment New Title', 'Description of the new Comment comes here...'));
  }

  clearAllComments() {
    this.comments = [];
  }

}
