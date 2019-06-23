import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  view = 'enrollee';
  bankSubForm = false;

  constructor() { }

  ngOnInit() {
  }

  switchView(value) {
    this.view = value;
  }

  showBankDetail() {
    this.bankSubForm = !this.bankSubForm;
  }

}
