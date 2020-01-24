import { Component, OnInit, Input, SimpleChanges, OnChanges, DoCheck,
   AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Comments } from '../comments';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked,
AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {

  // tslint:disable-next-line:no-input-rename
  @Input('comment') data: Comments;
  constructor() {
    console.log(`constructor, new - data is ${this.data}`);
   }

   // Adding Hooks...
  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log(`ngOnChanges - data is ${this.data}`);
  }


  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.data}`);
  }

// DoCheck and OnChanges implementing in a same class is not recommended

 ngDoCheck() {
  console.log(`ngDoCheck  - data is ${this.data}`);
 }

  ngAfterContentInit(): void {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.
    console.log(`ngAfterContentInit  - data is ${this.data}`);
  }

  ngAfterContentChecked(): void {
    // Called after every check of the component's or directive's content.
    // Add 'implements AfterContentChecked' to the class.
    console.log(`ngAfterContentChecked  - data is ${this.data}`);
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    console.log(`ngAfterViewInit  - data is ${this.data}`);
  }

  ngAfterViewChecked(): void {
    // Called after every check of the component's view. Applies to components only.
    // Add 'implements AfterViewChecked' to the class.
    console.log(`ngAfterViewChecked  - data is ${this.data}`);
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    console.log(`ngOnDestroy  - data is ${this.data}`);
  }

}
