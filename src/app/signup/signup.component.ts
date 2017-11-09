import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from "./signup.interface";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
 user: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      nickname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      Adresse: new FormControl('', Validators.required),
      Tel: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.user.value, this.user.valid);
  }

}
