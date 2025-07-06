export class ProfileComponent {
  user = {
    name: 'Aarav',
    age: 21,
    bio: 'Full-stack dev passionate about building cool stuff and winning hackathons.',
    skills: ['Angular', 'Node.js', 'MongoDB'],
    interests: ['Hackathons', 'Startups', 'AI'],
    availability: 'Weekends & evenings',
    location: {
      state: 'Karnataka',
      country: 'India'
    },
    profilePictureUrl: 'https://via.placeholder.com/150'
  };

  swipeLeft() {
    console.log('Swiped left');
  }

  swipeRight() {
    console.log('Swiped right');
  }
}
