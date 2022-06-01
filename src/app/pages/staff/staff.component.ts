import { Component, HostListener, OnInit } from '@angular/core';
import { SanityService } from 'src/app/service/sanity.service';

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

  staff = [];

  numVisible = 3;

  constructor(private readonly sanityService: SanityService) {}

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }

  ngOnInit(): void {
    this.getEmployees()
    if (window.innerWidth <= 768) this.numVisible = 1;
    else this.numVisible = 3;
  }

  async getEmployees(): Promise<any> {
    this.staff = await this.sanityService.getEmployees();
    return this.staff;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    if (event.target.innerWidth <= 768) this.numVisible = 1;
    else this.numVisible = 3;
  }
}
