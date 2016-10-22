import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logo : string = "/assets/mhalong_logo_light_sm.png";

  constructor() { }

  ngOnInit() {
  }

}
