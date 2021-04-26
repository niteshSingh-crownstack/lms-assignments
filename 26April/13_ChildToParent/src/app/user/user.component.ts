import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
@Output() parentFuncton:EventEmitter<any>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
sendData(){
  let data = {name:'anil',age:26}
  this.parentFuncton.emit(data);
}
}
