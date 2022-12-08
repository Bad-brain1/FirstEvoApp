import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  userData:any;
  constructor(
    private data: BooksService
  ) { }

  ngOnInit(): void {
    this.userData = this.data
  }

}
