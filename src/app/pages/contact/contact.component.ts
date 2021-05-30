import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  options: any;

  overlays: any[] = [];

  infoWindow: any;

  constructor() {}

  ngOnInit() {
    this.options = {
      center: { lat: 39.473248086255985, lng: -84.45524832277957 },
      zoom: 11,
    };

    this.overlays = [
      new google.maps.Marker({
        position: { lat: 39.40701038282914, lng: -84.57211380089225 },
        title: 'Hamilton Location',
      }),
      new google.maps.Marker({
        position: { lat: 39.49717610551324, lng: -84.3551313841213 },
        title: 'Middletown Location',
      }),
    ];

    this.infoWindow = new google.maps.InfoWindow();
  }

  handleOverlayClick(event: any) {
    let title = event.overlay.getTitle();
    this.infoWindow.setContent('' + title + '');
    this.infoWindow.open(event.map, event.overlay);
    event.map.setCenter(event.overlay.getPosition());
  }
}
