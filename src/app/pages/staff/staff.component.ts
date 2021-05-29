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
      img: '',
      name: 'Stanley Scheidler, D.O.',
      description: `Dr. Stan is a patient-focused primary care physician dedicated to serving his community's families.  He believes that everyone needs to be treated as a person, not as a number or a group.  He understands that a patient is a person who is a unique individual and who should be addressed in that manner.`,
    },
    {
      img: '',
      name: 'Joseph Scheidler, D.O.',
      description: 'Visiting Orthopedic Surgeon',
    },
    {
      img: '',
      name: `Brianna O'Neill, Scribe`,
      description: `Dr. Stan is a patient-focused primary care physician dedicated to serving his community's families.  He believes that everyone needs to be treated as a person, not as a number or a group.  He understands that a patient is a person who is a unique individual and who should be addressed in that manner.`,
    },
    {
      img: '',
      name: 'Stanley Scheidler, D.O.',
      description: `Dr. Stan is a patient-focused primary care physician dedicated to serving his community's families.  He believes that everyone needs to be treated as a person, not as a number or a group.  He understands that a patient is a person who is a unique individual and who should be addressed in that manner.`,
    },
    {
      img: '',
      name: 'Stanley Scheidler, D.O.',
      description: `Dr. Stan is a patient-focused primary care physician dedicated to serving his community's families.  He believes that everyone needs to be treated as a person, not as a number or a group.  He understands that a patient is a person who is a unique individual and who should be addressed in that manner.`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
