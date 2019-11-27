import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'OEE',
    icon: 'credit-card-outline',
    link: '/pages/oee',
    home: true,
  },
  {
  title: 'Setting',
  icon: 'monitor-outline',
   children:[
  {
    title: 'Cloud MQTT Setting',
    icon: 'cloud-upload-outline',
    link:'/pages/setting/cloud',
  },
],
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      
    ],
  },
];
