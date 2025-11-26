import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Camera,
  User,
  LucideGraduationCap,
} from 'lucide-react';

export const links = {
  admin: [
    {
      title: 'Home',
      url: '/',
      icon: Home,
    },
    {
      title: 'Teachers',
      url: '/app/admin/teachers',
      icon: User,
    },
    {
      title: 'Students',
      url: '/app/admin/students',
      icon: LucideGraduationCap,
    },
    {
      title: 'Inbox',
      url: '/inbox',
      icon: Inbox,
    },
    {
      title: 'Calendar',
      url: '/calendar',
      icon: Calendar,
    },
    {
      title: 'Search',
      url: '/search',
      icon: Search,
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: Settings,
    },
  ],
  teacher: [
    {
      title: 'Home',
      url: '#',
      icon: Home,
    },
    {
      title: 'Inbox',
      url: '#',
      icon: Camera,
    },
  ],
};
