import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent implements OnInit {
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  staff = [
    {
      img: '../../../assets/default-avatar.jpg',
      name: 'Stanley Scheidler, D.O.',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem orci, sollicitudin sit amet ex at, maximus ornare eros. Donec et mauris hendrerit, sollicitudin urna sit amet, sollicitudin elit. Maecenas ante magna, vehicula quis dolor vitae, pharetra varius quam. Sed et tincidunt nibh. Phasellus vitae egestas felis. Cras luctus a.`,
    },
    {
      img: '../../../assets/default-avatar.jpg',
      name: 'Joseph Scheidler, D.O.',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem orci, sollicitudin sit amet ex at, maximus ornare eros. Donec et mauris hendrerit, sollicitudin urna sit amet, sollicitudin elit. Maecenas ante magna, vehicula quis dolor vitae, pharetra varius quam. Sed et tincidunt nibh. Phasellus vitae egestas felis. Cras luctus a.`,
    },
    {
      img: '../../../assets/default-avatar.jpg',
      name: `Brianna O'Neill, Scribe`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem orci, sollicitudin sit amet ex at, maximus ornare eros. Donec et mauris hendrerit, sollicitudin urna sit amet, sollicitudin elit. Maecenas ante magna, vehicula quis dolor vitae, pharetra varius quam. Sed et tincidunt nibh. Phasellus vitae egestas felis. Cras luctus a.`,
    },
    {
      img: '../../../assets/default-avatar.jpg',
      name: 'Stanley Scheidler, D.O.',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem orci, sollicitudin sit amet ex at, maximus ornare eros. Donec et mauris hendrerit, sollicitudin urna sit amet, sollicitudin elit. Maecenas ante magna, vehicula quis dolor vitae, pharetra varius quam. Sed et tincidunt nibh. Phasellus vitae egestas felis. Cras luctus a.`,
    },
    {
      img: '../../../assets/default-avatar.jpg',
      name: 'Stanley Scheidler, D.O.',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem orci, sollicitudin sit amet ex at, maximus ornare eros. Donec et mauris hendrerit, sollicitudin urna sit amet, sollicitudin elit. Maecenas ante magna, vehicula quis dolor vitae, pharetra varius quam. Sed et tincidunt nibh. Phasellus vitae egestas felis. Cras luctus a.`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
