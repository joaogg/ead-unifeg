import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sidebarActive(){
    $('#sidebar').toggleClass('active');
  }
}
