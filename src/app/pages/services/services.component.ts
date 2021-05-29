import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services = [
    {
      header: `Diagnostic and...`,
      content: `Including vision, hearing, allergy, blood pressure, cholesterol,
  diabetes, cancer, and lung disease`,
    },
    {
      header: `Acute Illness`,
      content: `Including pneumonia, bronchitis, croup, pertusis, appendicitis, allergic
      rhinitis, etc`,
    },
    {
      header: `Chronic Illness`,
      content: `Including hypertension, diabetes, coronary artery disease, COPD, asthma,
      high cholesterol, and more`,
    },
    {
      header: `Laboratory Services`,
      content: `Mercy Health is on-site during regular office hours for our patient's
      convenience`,
    },
    {
      header: `Geriatric Medicine`,
      content: `Evaluation of elderly person's functional ability, physical health,
      cognition and mental health, and socioenvironmental circumstances`,
    },
    {
      header: `Dermatological...`,
      content: `Treatments for Acne, Rosacea, Eczema, Psoriasis and other skin disorders`,
    },
    {
      header: `Flu Vaccination`,
      content: `The Center for Disease Control recommends everyone 6 months and older
      receive an annual flu vaccination. Schedule yours today!`,
    },
    {
      header: `Physical Exams`,
      content: `We perform annual, and pre-employment physical exams`,
    },
    {
      header: `Testosterone Therapy`,
      content: `Addressing this condition is both a life changing and life enhancing
      therapy for those individuals with a deficiency in testosterone`,
    },
    {
      header: `DEXA Scan`,
      content: `Procedure used to measure bone density and determine the risk of
      osteoporosis`,
    },
    {
      header: `X-Ray`,
      content: `The only full service primary care office in southwest Ohio that
      provides one stop care for acute fractures (x-ray, cast application, and
      follow-up care)`,
    },
    {
      header: `Sports Medicine`,
      content: `Minor in-office surgeries and comprehensive treatment and care for all
      minor sports injuries including: tendinitis, sprains, strains, joint
      pain, pulled muscle, and fractures`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
