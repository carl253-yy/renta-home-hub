
import { Button } from '@/components/ui/button';
import { Home, FileText, Wrench, MessageSquare, Heart, BarChart3 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavItem } from './NavigationConfig';

interface MobileNavigationProps {
  navItems: NavItem[];
}

export const MobileNavigation = ({ navItems }: MobileNavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Function to determine if an item is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border z-10">
      <div className="flex justify-around items-center px-1">
        {navItems.map((item) => (
          <Button
            key={item.path}
            variant="ghost"
            className={`flex flex-col py-2 px-1 ${isActive(item.path) ? 'text-primary' : 'text-muted-foreground'}`}
            onClick={() => navigate(item.path)}
          >
            <div>{item.icon}</div>
            <span className="text-xs mt-1 font-aptos truncate">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
