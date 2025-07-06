import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Profile {
  id: number;
  name: string;
  age: number;
  avatar: string;
  bio: string;
  skills: string[];
  interests: string[];
  availability: string;
  location: string;
  matchPercentage: number;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  currentProfileIndex = 0;
  profiles: Profile[] = [
    {
      id: 1,
      name: 'Aarav',
      age: 21,
      avatar: '👨‍💻',
      bio: 'Full-stack developer passionate about building innovative solutions and winning hackathons. Love working on AI/ML projects and open source contributions.',
      skills: ['Angular', 'Node.js', 'MongoDB', 'React', 'Python', 'Docker'],
      interests: ['Hackathons', 'Startups', 'AI/ML', 'Open Source', 'Tech Meetups'],
      availability: 'Weekends & Evenings',
      location: 'Karnataka, India',
      matchPercentage: 95
    },
    {
      id: 2,
      name: 'Sarah',
      age: 24,
      avatar: '👩‍🎨',
      bio: 'UI/UX designer with a passion for creating beautiful, user-centered experiences. Specialized in mobile app design and design systems.',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research', 'Design Systems'],
      interests: ['Design Thinking', 'Mobile Apps', 'User Experience', 'Creative Coding', 'Design Communities'],
      availability: 'Flexible Schedule',
      location: 'Mumbai, India',
      matchPercentage: 88
    },
    {
      id: 3,
      name: 'Mike',
      age: 28,
      avatar: '👨‍🔧',
      bio: 'DevOps engineer with expertise in cloud infrastructure and CI/CD pipelines. Love automating everything and optimizing performance.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Linux'],
      interests: ['Cloud Computing', 'Automation', 'Performance Optimization', 'Infrastructure as Code', 'Tech Blogs'],
      availability: 'Weekdays',
      location: 'Delhi, India',
      matchPercentage: 92
    }
  ];

  get currentProfile(): Profile {
    return this.profiles[this.currentProfileIndex];
  }

  swipe(direction: 'left' | 'right') {
    // Add swipe animation logic here
    console.log(`Swiped ${direction} on ${this.currentProfile.name}`);
    
    // Move to next profile
    this.currentProfileIndex = (this.currentProfileIndex + 1) % this.profiles.length;
  }

  getMatchColor(): string {
    const percentage = this.currentProfile.matchPercentage;
    if (percentage >= 90) return '#10b981';
    if (percentage >= 80) return '#f59e0b';
    return '#ef4444';
  }
} 