import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  tabs: string[] = ['Register', 'Family Details', 'Contact Detail', 'Bank Details'];

  activetedTabIndex: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  tabChange(tabIndex: number) {
    debugger;
    this.activetedTabIndex = tabIndex;
  }

}
