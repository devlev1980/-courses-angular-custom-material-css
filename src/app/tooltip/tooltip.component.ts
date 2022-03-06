import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yl-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  message: string = 'aaa'
  constructor() { }

  ngOnInit(): void {
  }

}
