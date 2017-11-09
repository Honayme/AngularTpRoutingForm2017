import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ListContactService {
listContact = [
    {_id: 0,
      nickname: "Honayme",
    name: "Thomas",
    Adresse: "mon adresse",
    Tel: "0606060606",
    mail: "thomas.mirabile@gmail.com"},
   { _id: 1,
     nickname: "Goulaheau",
    name: "Bobby",
    Adresse: "Adresse de bobby",
    Tel: "0606060606",
    mail: "boby@gmail.com"},
  {_id: 2,
    nickname: "Kilou",
    name: "Laurent",
    Adresse: "Adresse de Laurent",
    Tel: "0606060606",
    mail: "kilou@gmail.com"},
  ];

  fakeUsers = 'https://jsonplaceholder.typicode.com/users';

//Injection de dépendance
  constructor() {}

  get(){
    return this.listContact; //Observable
  }

}


