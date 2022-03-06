import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yl-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  checked = false;
  indeterminate = false;
  constructor() { }

  ngOnInit(): void {
  }

}
