import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  sanityClientCredentials = {
    option: sanityClient({
      projectId: 'vfh8d0hi',
      dataset: 'production',
      apiVersion: '2021-08-31',
      useCdn: true,
    }),
  };

  urlFor = (source: any) =>
    imageUrlBuilder(this.sanityClientCredentials.option).image(source);

  constructor() {}

  async getEmployees(): Promise<any> {
    return await this.sanityClientCredentials.option.fetch(`
    *[_type == "employee"]{
      _id,
      name,
      bio,
      image
    }`);
  }

  async getServices(): Promise<any> {
    return await this.sanityClientCredentials.option.fetch(`
    *[_type == "service"]{
      _id,
      name,
      description
    }`)
  }
}
