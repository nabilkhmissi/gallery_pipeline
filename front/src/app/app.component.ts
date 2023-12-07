import { Component } from '@angular/core';
import { GalleryService } from './services/gallery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  constructor(private _gallery: GalleryService) { }

  gallery$ = this._gallery.findAll();

}
