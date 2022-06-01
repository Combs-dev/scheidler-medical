import { Component, OnInit } from '@angular/core';
import { SanityService } from 'src/app/service/sanity.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services: any = [];

  constructor(private readonly sanityService: SanityService) {}

  ngOnInit(): void {
    this.getServices();
  }

  async getServices(): Promise<any> {
    this.services = await this.sanityService.getServices();
    return this.services;
  }
}
