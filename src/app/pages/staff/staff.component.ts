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
      description: `Dr. Scheidler is a patient-focused primary care physician dedicated to serving his community's families.
      He believes that everyone needs to be treated as a person, not as a number or a group.
      He understands that each patient is a unique individual and should be addressed in that manner.
      Dr. Scheidler was born and raised in Wyoming, Ohio. For his undergraduate degree, he attended the University of Dayton where he played soccer.
      He recieved his medical degree from the Pikeville College School of Osteopathic Medicine. Dr. Scheidler has been married to his wife Marla for thirty-seven years.
      They have three daughters and twelve grandchildren. On the weekends, Dr. Scheidler enjoys hunting, fishing and spending time outdoors. `,
    },
    {
      img: '../../../assets/headshots/roberson.svg',
      name: 'Chris Roberson, FNP',
      description: `Chris Roberson is a certified Family Nurse Practitioner at Scheidler Medical Preferred.
      Chris began his career in medicine as a combat medic in the Army. He received his Bachelor of Science in Nursing from Miami University.
      Chris then worked as a registered nurse at Miami Valley Hopsital and the Cincinnati Eye Institute.
      While working full time, Chris finished his graduate degree at Spring Arbor University.
      Chris works closley with Dr. Scheidler to ensure that each patient recieves individualized and comprehensive care.`,
    },
    {
      img: '../../../assets/default-avatar.jpg',
      name: `Anitra Niece, FNP`,
      description: `Anitra Niece is a certified Family Nurse Practioner at Schediler Medical Preferred. Anitra is local to the area as she grew up in Ross.
      She received her Bachelor of Science in Nursing from Ohio University. As a registered nurse, Anitra worked in the intensive care unit and the operating room.
      In 2021, she completed her graduate degree at Northern Kentucky University and earned her licensure as a Family Nurse Practioner.
      Anitra has been married to her husband for twenty-three years and has three daughters. In her free time she enjoys reading, traveling and being outdoors. Anitra works
      alongside Dr. Scheidler to provide high-quality care to each patient.`,
    },
    {
      img: '../../../assets/default-avatar.jpg',
      name: 'Natalie Boyd, Office Manager',
      description: `Natalie Boyd is the office manager at Scheidler Medical Preferred. She ensures that the office runs smoothly both clincally and administratively.
      Natalie was born and raised in Hamilton. She began her career in the medical field by earning her STNA and later her LPN from Butler Tech.
      From there, she worked in the labor and delivery unit at UC hospital. Natalie also spent two years working in the insurance verification department for the Drake center.
      Before joining Scheidler Medical Preferred, she managed a hospice facility for six years. Natalie is happily married to her junior high sweetheart and has five children.
      She enjoys spending time with her Tennesse Walking Horse named Ginger and supporting the UC Bearcats sports teams.`,
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
