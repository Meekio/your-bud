import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Match {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  skills: string[];
  matchDate: string;
  lastMessage: string;
  unreadCount: number;
  isOnline: boolean;
}

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
  matches: Match[] = [
    {
      id: 1,
      name: 'Aarav',
      avatar: '👨‍💻',
      bio: 'Full-stack developer passionate about building innovative solutions',
      skills: ['Angular', 'Node.js', 'MongoDB'],
      matchDate: '2024-01-15',
      lastMessage: 'Hey! I loved your project idea. When can we start?',
      unreadCount: 2,
      isOnline: true
    },
    {
      id: 2,
      name: 'Sarah',
      avatar: '👩‍🎨',
      bio: 'UI/UX designer with a passion for creating beautiful experiences',
      skills: ['Figma', 'Adobe XD', 'Prototyping'],
      matchDate: '2024-01-12',
      lastMessage: 'The design system looks amazing! Great work!',
      unreadCount: 0,
      isOnline: false
    },
    {
      id: 3,
      name: 'Mike',
      avatar: '👨‍🔧',
      bio: 'DevOps engineer with expertise in cloud infrastructure',
      skills: ['AWS', 'Docker', 'Kubernetes'],
      matchDate: '2024-01-10',
      lastMessage: 'Let\'s schedule a call to discuss the project architecture',
      unreadCount: 1,
      isOnline: true
    }
  ];

  selectedMatch: Match | null = null;

  selectMatch(match: Match) {
    this.selectedMatch = match;
    // Mark messages as read
    match.unreadCount = 0;
  }

  getMatchTime(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays < 7) return `${diffDays - 1} days ago`;
    return date.toLocaleDateString();
  }
} 