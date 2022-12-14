import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.css']
})
export class InlineComponent implements OnInit {

  titleTag:HTMLMetaElement|null
  typeTag:HTMLMetaElement|null
  urlTag:HTMLMetaElement|null

  constructor(private meta: Meta, private title:Title) { 
    this.meta.addTags([
      {property:'og:title',content:'The Rock'},
      {property:'og:type',content:'video.movie'},
      {property:'og:url',content:'//www.imdb.com/title/tt0117500/'}
    ],false)

    const titleValue = this.meta.getTag("property='og:title'")
    this.title.setTitle(titleValue!.content)

    this.titleTag = this.meta.getTag("property='og:title'")
    this.typeTag = this.meta.getTag("property='og:type'")
    this.urlTag = this.meta.getTag("property='og:url'")
  }

  ngOnInit(): void {
  }

}
