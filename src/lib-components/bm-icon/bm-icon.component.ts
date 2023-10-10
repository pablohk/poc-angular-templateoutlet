import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bm-icon',
  templateUrl: './bm-icon.component.html',
  styleUrls: ['./bm-icon.component.css'],
})
export class BMIconComponent implements OnInit {
@Input() icon=''
  constructor() { }

  ngOnInit() {
  }

}
