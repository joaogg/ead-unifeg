import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-panel-logged',
  templateUrl: './panel-logged.component.html',
  styleUrls: ['./panel-logged.component.css']
})
export class PanelLoggedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#sidebar').toggleClass('active');
  }

}
