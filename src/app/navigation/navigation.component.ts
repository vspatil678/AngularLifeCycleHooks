import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLifeCycleHook() {
    this.router.navigate(['LifeCycleHook']);
  }

  onInput() {
    this.router.navigate(['ThroughInput']);
  }

  onOutput() {
    this.router.navigate(['ThroughOutput']);
  }

  onViewChield() {
    this.router.navigate(['ThroughViewChield']);
  }

  onServices() {
    this.router.navigate(['ThroughServices']);
  }
}
