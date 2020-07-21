export class NotificationsDb {
  public static data = [
    {
      name: 'Stella Johnson',
      thumb: 'https://via.placeholder.com/150X150',
      message: '<span class="user-name">Stella Johnson</span> and <span class="user-name">Chris Harris</span> ' +
          'have birthdays today. Help them celebrate!',
      time: '8 hours ago',
      icon: {
        name: 'like',
        color: 'text-light-blue'
      }
    },
    {
      name: 'Jonathan Madano',
      thumb: 'https://via.placeholder.com/150X150',
      message: '<span class="user-name">Jonathan Madano</span> commented on your post.',
      time: '9 hours ago',
      icon: {
        name: 'message',
        color: ''
      }
    },
    {
      name: 'Chelsea Brown',
      thumb: 'https://via.placeholder.com/150X150',
      message: '<span class="user-name">Chelsea Brown</span> sent a video recomendation.',
      time: '13 hours ago',
      icon: {
        name: 'play-circle',
        color: 'text-primary'
      }
    },
    {
      name: 'Chelsea Brown',
      thumb: 'https://via.placeholder.com/150X150',
      message: '<span class="user-name">Alex Dolgove</span> and <span class="user-name">Chris Harris</span> like your post.',
      time: 'yesterday at 9:30',
      icon: {
        name: 'play-circle',
        color: ''
      }
    },
    {
      name: 'John Smith',
      thumb: '',
      message: '<span class="user-name">John Smith</span> replied your comment.',
      time: 'few seconds ago',
      icon: {
        name: 'like',
        color: 'text-primary'
      }
    }
  ];
}
