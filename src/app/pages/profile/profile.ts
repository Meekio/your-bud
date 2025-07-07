import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  users = [
    {
      name: 'Alice Johnson',
      age: 27,
      bio: 'Frontend Developer. Loves React and hiking.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      skills: ['React', 'TypeScript', 'CSS']
    },
    {
      name: 'Bob Smith',
      age: 31,
      bio: 'Backend wizard. Node.js, databases, and coffee.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      skills: ['Node.js', 'MongoDB', 'Docker']
    },
    {
      name: 'Carol Lee',
      age: 24,
      bio: 'Fullstack engineer. Enjoys hackathons and travel.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      skills: ['Angular', 'Python', 'AWS']
    }
  ];
  currentIndex = 0;
  touchStartX: number | null = null;
  touchEndX: number | null = null;

  get currentUser() {
    return this.users[this.currentIndex];
  }

  prevUser() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextUser() {
    if (this.currentIndex < this.users.length - 1) {
      this.currentIndex++;
    }
  }

  // Touch events for mobile swipe
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe() {
    if (this.touchStartX !== null && this.touchEndX !== null) {
      const diff = this.touchEndX - this.touchStartX;
      if (diff > 50) {
        this.nextUser(); // swipe right now means go to next
      } else if (diff < -50) {
        this.prevUser(); // swipe left now means go back
      }
      
    }
    this.touchStartX = null;
    this.touchEndX = null;

  }
}
