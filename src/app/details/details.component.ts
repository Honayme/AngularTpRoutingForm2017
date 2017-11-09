import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ListContactService} from "../list-contact.service";
import {ContactListComponent} from "../contact-list/contact-list.component";
import {Location} from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {
  details: any;
  _location : any;

  constructor(private listContactServiceDetails: ListContactService) { }

  ngOnInit() {
    this.details = this.listContactServiceDetails.get();
  }


  backClicked() {
    this._location.back();
  }

}
