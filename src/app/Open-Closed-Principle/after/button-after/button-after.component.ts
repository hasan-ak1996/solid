import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-after',
  templateUrl: './button-after.component.html',
  styleUrls: ['./button-after.component.css']
})
export class ButtonAfterComponent implements OnInit {
  @Input() style: { [index: string]: string } = {};
  constructor() { }

  ngOnInit(): void {
  }

}
