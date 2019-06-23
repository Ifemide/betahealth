import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrollee',
  templateUrl: './enrollee.component.html',
  styleUrls: ['./enrollee.component.css']
})
export class EnrolleeComponent implements OnInit {

  view = 'claims';

  constructor() { }

  ngOnInit() {
  }

  switchView(val) {
    this.view = val;
  }

}
