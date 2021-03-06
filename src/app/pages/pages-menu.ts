import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Register',
    icon: 'copy-outline',
    link: '/pages/register',
    
  },
  {
    title: 'Login',
    icon: 'checkmark-outline',
    link: '/pages/login'
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
  title: 'OEE',
  icon: 'pie-chart-outline',
  children: [
    {
      title:'Charts',
      link:'/pages/charts/oeecharts',
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
