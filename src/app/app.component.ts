import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [{
    id:1,
    name:'Alex',
    date:'01 08 2022'
  },{
    id:2,
    name:'Oly',
    date:'11 28 2022'
  },{
    id:3,
    name:'Mik',
    date:'12 30 2022'
  },{
    id:4,
    name:'Mary',
    date:'02 02 2022'
  },{
    id:5,
    name:'Poly',
    date:'11 15 2022'
  },{
    id:6,
    name:'Tommy',
    date:'03 20 2022'
  }];

}
