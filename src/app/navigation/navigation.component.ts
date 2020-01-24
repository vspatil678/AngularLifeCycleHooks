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
    this.router.navigate(['Communication/Types/ThroughInput']);
  }

  onOutput() {
    this.router.navigate(['Communication/Types/ThroughOutput']);
  }

  onViewChield() {
    this.router.navigate(['Communication/Types']);
  }

  onServices() {
    this.router.navigate(['Communication/Types/ThroughServices']);
  }
}
