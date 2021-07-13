import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services = [
    {
      header: `Chronic Illness`,
      content: `Evaluation and treatment for hypertension, diabetes, coronary artery disease, COPD, asthma,
      high cholesterol, and more.`,
    },
    {
      header: `Osteopathic Intervention`,
      content: `Diagnosis and treatment of various diseases of the spine and major joints including osteoarthritis, degenerative disc disease, and more. Additionally, Dr. Scheidler is trained to use osteopathic manipulative treatment to correct misalignment of the spine.`,
    },
    {
      header: `Acute Illness`,
      content: `Treatment for pneumonia, bronchitis, croup, pertusis, appendicitis, allergic
      rhinitis. In most cases, visits for acute illness can be made same-day.`,
    },
    {
      header: `Physical Exams`,
      content: `We perform annual, school and pre-employment physical exams.`,
    },
    {
      header: `Vaccinations`,
      content: `We provide numerous vaccinations inclduing Influenza, Pneumonia, Tetanus and COVID-19.`,
    },
    {
      header: `Sports Medicine`,
      content: `Treatment for
      minor sports injuries including: tendinitis, sprains, strains, joint
      pain, pulled muscles, and fractures.`,
    },
    {
      header: `Geriatric Medicine`,
      content: `Evaluation of elderly person's functional ability, physical health,
      cognition and mental health, and socioenvironmental circumstances.`,
    },
    {
      header: `Dermatological`,
      content: `Treatments for Acne, Rosacea, Eczema, Psoriasis and other skin disorders`,
    },
    {
      header: `Addiction`,
      content: `We provide individuals with the opportunity to take control of their recovery and life. We assist patients in the process of detox and long term recovery care for alcoholism and opiate addiction. We believe in holistic recovery and provide counseling on site.`,
    },
    {
      header: `Hormone Therapy`,
      content: `We treat a range of hormonal disorders including low testosterone and gender dysphoria.`,
    },
    {
      header: `Laboratory Services`,
      content: `PathGroup is on-site labratory that is open during regular office hours for our patient's
      convenience.`,
    },
    {
      header: `X-Ray`,
      content: `With an X-Ray on site, we are able to provide comprehensive care for osteopathic diseases, acute injuries and respiratory illness.`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
