import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';

  constructor(private meta:Meta, titleValue:Title){
    this.meta.addTag({property:'og:desc',content:'root_desc'})
    titleValue.setTitle(this.title)
  }

}
