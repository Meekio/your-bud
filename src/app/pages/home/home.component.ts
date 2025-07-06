import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  features = [
    {
      icon: '💚',
      title: 'Find Your Perfect Match',
      description: 'Connect with like-minded developers and tech enthusiasts'
    },
    {
      icon: '🚀',
      title: 'Build Amazing Projects',
      description: 'Collaborate on innovative projects and hackathons'
    },
    {
      icon: '🌟',
      title: 'Grow Your Network',
      description: 'Expand your professional network and learn from others'
    },
    {
      icon: '🎯',
      title: 'Skill-Based Matching',
      description: 'Get matched based on your skills and interests'
    }
  ];

  stats = [
    { number: '500+', label: 'Active Users' },
    { number: '50+', label: 'Projects Created' },
    { number: '200+', label: 'Successful Matches' },
    { number: '95%', label: 'Satisfaction Rate' }
  ];
} 