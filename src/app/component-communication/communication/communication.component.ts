import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  public title: string;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.splitUrl(event.url);
        // console.log('NavigationEnd:', event.url);
      }
    });
  }

  ngOnInit() {
  }

  private splitUrl(url: string) {
      // tslint:disable-next-line:one-variable-per-declaration
      const urls: string[] = url.split('/');
      this.title = urls[3];
  }

}
