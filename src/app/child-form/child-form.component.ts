import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})
export class ChildFormComponent implements OnInit {

  constructor() { }

@Input() cData;
  ngOnInit() {
     console.warn(this.cData);
  }

name =""
parentComponent(data){
  this.name= data.name
}

}
