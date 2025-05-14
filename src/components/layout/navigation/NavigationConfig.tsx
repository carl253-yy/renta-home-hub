
import { Home, FileText, Wrench, BarChart3, MessageSquare, Heart } from 'lucide-react';

export type NavItem = {
  icon: JSX.Element;
  label: string;
  path: string;
};

export const getNavItems = (role?: string): NavItem[] => {
  const landlordNavItems: NavItem[] = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/dashboard/landlord' },
    { icon: <FileText size={20} />, label: 'Documents', path: '/dashboard/landlord/documents' },
    { icon: <BarChart3 size={20} />, label: 'Reports', path: '/dashboard/landlord/reports' },
    { icon: <Wrench size={20} />, label: 'Maintenance', path: '/dashboard/landlord/maintenance' },
    { icon: <MessageSquare size={20} />, label: 'Messages', path: '/dashboard/landlord/messages' },
  ];
  
  const tenantNavItems: NavItem[] = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/dashboard/tenant' },
    { icon: <FileText size={20} />, label: 'Documents', path: '/dashboard/tenant/documents' },
    { icon: <Wrench size={20} />, label: 'Maintenance', path: '/dashboard/tenant/maintenance' },
    { icon: <MessageSquare size={20} />, label: 'Messages', path: '/dashboard/tenant/messages' },
  ];
  
  const caretakerNavItems: NavItem[] = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/dashboard/caretaker' },
    { icon: <FileText size={20} />, label: 'Reports', path: '/dashboard/caretaker/reports' },
    { icon: <Wrench size={20} />, label: 'Maintenance', path: '/dashboard/caretaker/maintenance' },
    { icon: <MessageSquare size={20} />, label: 'Messages', path: '/dashboard/caretaker/messages' },
  ];
  
  const hunterNavItems: NavItem[] = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/dashboard/hunter' },
    { icon: <FileText size={20} />, label: 'Listings', path: '/dashboard/hunter/listings' },
    { icon: <Heart size={20} />, label: 'Saved', path: '/dashboard/hunter/saved' },
    { icon: <MessageSquare size={20} />, label: 'Messages', path: '/dashboard/hunter/messages' },
  ];
  
  switch (role) {
    case 'landlord':
      return landlordNavItems;
    case 'tenant':
      return tenantNavItems;
    case 'caretaker':
      return caretakerNavItems;
    case 'hunter':
      return hunterNavItems;
    default:
      return [];
  }
};
