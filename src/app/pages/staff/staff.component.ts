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
      img: '../../../assets/headshots/scheidler.svg',
      name: 'Stanley Scheidler, D.O.',
      description: `Dr. Stan is a patient-focused primary care physician dedicated to serving his community's families.  He believes that everyone needs to be treated as a person, not as a number or a group.  He understands that each patient is a unique individual and should be addressed in that manner. Dr. Scheidler was born and raised in Wyoming, Ohio. He recieved his medical degree from the Pikeville College School of Osteopathic Medicine.`,
    },
    {
      img: '../../../assets/headshots/roberson.svg',
      name: 'Chris Roberson, FNP',
      description: `Chris Roberson is a certified Family Nurse Practitioner at Scheidler Medical Preferred. Chris began his career in medicine as a combat medic in the Army. He the received a Bachelor of Science Degree in Nursing from Miami University, in Oxford, Ohio. Chris then worked as a registered nurse at Miami Valley Hopsital. While working full time, Chris finished his graduate degree at Spring Arbor University, located in Jackson, Michigan. Chris works closley with Dr. Scheidler to ensure that each patient recieves the most comprehensive care possible.`,
    },
    {
      img: '../../../assets/headshots/mcmurray.svg',
      name: `Linda McMurray, LSW`,
      description: `Linda McMurray is a licensed independent Social Worker. She is certified in anxiety treatment (CCATP) and DBT (C-DBT) with experience in adjusting to life changes, Anxiety, Depression, Grief, and PTSD. Linda has experience working with veterans at the Dayton Veter Affairs center and children at Child Focus. Given her experience, Linda is available to work with a wide variety of patients. Her focus is using Cognitive, Dialectic and Solution Focused thearpies to combat anxiety, depression, and grief.`,
    },
    {
      img: '../../../assets/headshots/gaitskill.svg',
      name: `Christian Gaitskill, MSW, LSW`,
      description: `Christian is a Licensed Social Worker. Four years ago, she obtained her Master’s degree in Social Work from Northern Kentucky University. Christian’s primary focus is in domestic violence and child abuse, but she enjoys working with a variety of individuals. She is available to work with anyone who is experiencing anxiety, depression, post-traumatic stress disorder and other common disorders.`,
    },
  ];

  numVisible = 3;

  constructor() {}

  ngOnInit(): void {
    if (window.innerWidth <= 768) this.numVisible = 1;
    else this.numVisible = 3;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    if (event.target.innerWidth <= 768) this.numVisible = 1;
    else this.numVisible = 3;
  }
}
