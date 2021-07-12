import { Component, HostListener, OnInit } from '@angular/core';

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
      description: `Dr. Stan is a patient-focused primary care physician dedicated to serving his community's families.  He believes that everyone needs to be treated as a person, not as a number or a group.  He understands that a patient is a person who is a unique individual and who should be addressed in that manner.`,
    },
    {
      img: '../../../assets/headshots/roberson.svg',
      name: 'Chris Roberson, NP',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem orci, sollicitudin sit amet ex at, maximus ornare eros. Donec et mauris hendrerit, sollicitudin urna sit amet, sollicitudin elit. Maecenas ante magna, vehicula quis dolor vitae, pharetra varius quam. Sed et tincidunt nibh. Phasellus vitae egestas felis. Cras luctus a.`,
    },
    {
      img: '../../../assets/headshots/gaitskill.svg',
      name: `Christian Gaitskill, MSW, LSW`,
      description: `Christian has been a Licensed Social Worker for 4 years after having obtained her Master’s in Social Work from Northern Kentucky University. Christian’s primary focus is domestic violence and child abuse, but loves working with individuals experiencing anxiety, depression, and post-traumatic stress disorder among other common disorders. To get scheduled with Christian, please call 513-286-3043. `,
    },
  ];

  numVisible = 3;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    if (event.target.innerWidth <= 768) this.numVisible = 1;
    else this.numVisible = 3;
  }
}
