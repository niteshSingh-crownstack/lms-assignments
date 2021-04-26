import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
getData(){
  return {
    name:'peter',
    age:35,
    id:100
  }
}
}
