import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SettingSection {
  title: string;
  icon: string;
  settings: Setting[];
}

interface Setting {
  id: string;
  label: string;
  type: 'toggle' | 'select' | 'input' | 'button';
  value?: any;
  options?: string[];
  description?: string;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  settingSections: SettingSection[] = [
    {
      title: 'Profile Settings',
      icon: '👤',
      settings: [
        {
          id: 'name',
          label: 'Display Name',
          type: 'input',
          value: 'John Doe',
          description: 'Your name as it appears to other users'
        },
        {
          id: 'bio',
          label: 'Bio',
          type: 'input',
          value: 'Full-stack developer passionate about building amazing products',
          description: 'Tell others about yourself'
        },
        {
          id: 'location',
          label: 'Location',
          type: 'input',
          value: 'Mumbai, India',
          description: 'Your current location'
        }
      ]
    },
    {
      title: 'Matching Preferences',
      icon: '🎯',
      settings: [
        {
          id: 'ageRange',
          label: 'Age Range',
          type: 'select',
          value: '18-35',
          options: ['18-25', '18-35', '25-40', '30-50', 'Any'],
          description: 'Preferred age range for matches'
        },
        {
          id: 'distance',
          label: 'Maximum Distance',
          type: 'select',
          value: '50km',
          options: ['10km', '25km', '50km', '100km', 'Any'],
          description: 'Maximum distance for potential matches'
        },
        {
          id: 'notifications',
          label: 'Match Notifications',
          type: 'toggle',
          value: true,
          description: 'Get notified when you have new matches'
        },
        {
          id: 'messageNotifications',
          label: 'Message Notifications',
          type: 'toggle',
          value: true,
          description: 'Get notified when you receive new messages'
        }
      ]
    },
    {
      title: 'Privacy & Security',
      icon: '🔒',
      settings: [
        {
          id: 'profileVisibility',
          label: 'Profile Visibility',
          type: 'select',
          value: 'Public',
          options: ['Public', 'Friends Only', 'Private'],
          description: 'Who can see your profile'
        },
        {
          id: 'onlineStatus',
          label: 'Show Online Status',
          type: 'toggle',
          value: true,
          description: 'Let others see when you\'re online'
        },
        {
          id: 'readReceipts',
          label: 'Read Receipts',
          type: 'toggle',
          value: false,
          description: 'Show when you\'ve read messages'
        }
      ]
    },
    {
      title: 'Account',
      icon: '⚙️',
      settings: [
        {
          id: 'email',
          label: 'Email Address',
          type: 'input',
          value: 'john.doe@example.com',
          description: 'Your email address'
        },
        {
          id: 'changePassword',
          label: 'Change Password',
          type: 'button',
          description: 'Update your account password'
        },
        {
          id: 'deleteAccount',
          label: 'Delete Account',
          type: 'button',
          description: 'Permanently delete your account and data'
        }
      ]
    }
  ];

  updateSetting(sectionIndex: number, settingIndex: number, value: any) {
    this.settingSections[sectionIndex].settings[settingIndex].value = value;
    console.log('Setting updated:', this.settingSections[sectionIndex].settings[settingIndex]);
  }

  handleButtonClick(setting: Setting) {
    switch (setting.id) {
      case 'changePassword':
        alert('Password change functionality would be implemented here');
        break;
      case 'deleteAccount':
        if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
          alert('Account deletion would be implemented here');
        }
        break;
    }
  }
} 