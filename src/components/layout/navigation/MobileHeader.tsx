
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

interface NavItem {
  icon: JSX.Element;
  label: string;
  path: string;
}

interface MobileHeaderProps {
  navItems: NavItem[];
  role?: string;
}

export const MobileHeader = ({ navItems, role }: MobileHeaderProps) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  
  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header className="border-b border-border p-4 flex items-center justify-between bg-white">
      <div className="flex items-center">
        <div className="w-8 h-8 mr-2"></div>
        <h1 className="text-primary font-bold font-aptos text-lg">QwetuLink</h1>
      </div>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="font-aptos">{user?.name || 'User'}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {navItems.map((item) => (
              <DropdownMenuItem 
                key={item.path} 
                onClick={() => navigate(item.path)}
                className="font-aptos"
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate(`/dashboard/${role}/profile`)} className="font-aptos">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout} className="font-aptos">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
