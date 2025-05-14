
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavItem {
  icon: JSX.Element;
  label: string;
  path: string;
}

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
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border">
      <div className="flex justify-around items-center p-2">
        {navItems.slice(0, 4).map((item) => (
          <Button
            key={item.path}
            variant="ghost"
            className={`flex flex-col py-2 ${isActive(item.path) ? 'text-primary' : 'text-muted-foreground'}`}
            onClick={() => navigate(item.path)}
          >
            <div>{item.icon}</div>
            <span className="text-xs mt-1 font-aptos">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
