import { SlSocialInstagram } from 'react-icons/sl';
import { BsFacebook } from 'react-icons/bs';

export const navigation = [
  { id: 1, title: 'Головна', path: '/' },
  { id: 2, title: 'Контакти', path: '/contacts' },
  { id: 3, title: 'Спортбар', path: '/sportbar' },
  { id: 4, title: 'Наш зал', path: '/gallery' },
];

export const socialsList = [
  {
    id: 1,
    path: 'https://www.instagram.com/sport_club_victoria/',
    component: <SlSocialInstagram />,
  },
  {
    id: 2,
    path: 'https://www.facebook.com/VICTORIAclubsport/',
    component: <BsFacebook />,
  },
];
