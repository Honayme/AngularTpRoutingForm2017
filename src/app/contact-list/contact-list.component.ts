import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ListContactService} from '../list-contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ContactListComponent implements OnInit {
  contacts: any;
  constructor(private listContactService: ListContactService) {

  }

  ngOnInit() {
    this.contacts = this.listContactService.get();
  }

}
