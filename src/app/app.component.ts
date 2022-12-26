import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FirstEvoApp';

  map:Map | undefined;

  constructor(private toastr:ToastrService){}


  ngOnInit(): void {
    this.map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'ol-map'
    });
  }

  message(){
    return Math.random() > 0.5 ? this.showSuccess() : this.showError()
  }

  showSuccess(){
    this.toastr.success('Метка добавлена', 'Успех');
  }
  showError(){
    this.toastr.error('метка не добавлена', 'Ошибка');
  }

}
