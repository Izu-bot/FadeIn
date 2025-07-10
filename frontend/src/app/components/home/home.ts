import { Component } from '@angular/core';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  image: string = '/images/ImageBarber.png';

  features: Feature[] = [
    {
      icon: '/icons/calendar-days-solid.svg',
      title: 'Smart Scheduling',
      description: 'Automated booking system that works 24/7'
    },
    {
      icon: '/icons/bell-solid.svg',
      title: 'Instant Notification',
      description: 'Never miss an appointment with real-time alerts'
    },
    {
      icon: '/icons/chart-line-solid.svg',
      title: 'Business Analytics',
      description: 'Track your growth with detailed insights'
    }
  ]

  steps: Step[] = [
    {
      number: '1',
      title: 'Download the app',
      description: 'Get FadeIn from your preferred app store'
    },
    {
      number: '2',
      title: 'Set up your profile',
      description: 'Add your business details and services'
    },
    {
      number: '3',
      title: 'Start accepting bookings',
      description: 'Begin receiving appointments instantly'
    }
  ]

  listFeatures: string[] = [
    'Automated scheduling to reduce manual work and optimize time',
    'Integrated and recurring payments, with security and convenience',
    'Advanced analytics to understand your performance and make strategic decisions',
    'Centralized financial management, with complete control of the barbershop\'s finances',
    'Create personalized promotions to attract and retain customers',
    'Modernize your business with cutting-edge technology and premium experience'
  ]
}
