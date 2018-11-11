import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
users:string[];
  constructor() { 
    this.users= ['Amir','Chetoos','Esmail'];
  }
  Getusers (){
    return this.users;
  }
}

