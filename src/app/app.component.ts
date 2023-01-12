import { Component } from '@angular/core';
import { ResponseService } from './response.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';
  
  constructor(private userData:ResponseService){
  }

  UsersData = this.userData.responseData

}
