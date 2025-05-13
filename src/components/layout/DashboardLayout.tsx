
import { useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { SidebarProvider, Sidebar, SidebarContent, SidebarFooter } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Home, FileText, Settings, LogOut, Wrench, BarChart3 } from 'lucide-react';

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { role } = useParams<{ role: string }>();
  const [collapsed, setCollapsed] = useState(false);
  
  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const landlordNavItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/dashboard/landlord' },
    { icon: <BarChart3 size={20} />, label: 'Reports', path: '/dashboard/landlord/reports' },
    { icon: <Wrench size={20} />, label: 'Maintenance', path: '/dashboard/landlord/maintenance' },
  ];
  
  const tenantNavItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/dashboard/tenant' },
    { icon: <FileText size={20} />, label: 'Documents', path: '/dashboard/tenant/documents' },
    { icon: <Wrench size={20} />, label: 'Maintenance', path: '/dashboard/tenant/maintenance' },
  ];
  
  const caretakerNavItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/dashboard/caretaker' },
    { icon: <Wrench size={20} />, label: 'Maintenance', path: '/dashboard/caretaker/maintenance' },
  ];
  
  const hunterNavItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/dashboard/hunter' },
    { icon: <FileText size={20} />, label: 'Saved', path: '/dashboard/hunter/saved' },
  ];
  
  let navItems;
  switch (role) {
    case 'landlord':
      navItems = landlordNavItems;
      break;
    case 'tenant':
      navItems = tenantNavItems;
      break;
    case 'caretaker':
      navItems = caretakerNavItems;
      break;
    case 'hunter':
      navItems = hunterNavItems;
      break;
    default:
      navItems = [];
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r border-border bg-sidebar" collapsible="icon">
          <div className="py-4 flex items-center justify-center">
            <div className={`text-xl font-bold font-aptos ${collapsed ? 'hidden' : 'block'}`}>
              QwetuLink
            </div>
            <div className={`${!collapsed ? 'hidden' : 'block'}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
          </div>
          
          <SidebarContent className="px-2">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  variant="ghost"
                  className="w-full justify-start font-aptos"
                  onClick={() => navigate(item.path)}
                >
                  {item.icon}
                  <span className={`ml-2 ${collapsed ? 'hidden' : 'block'}`}>{item.label}</span>
                </Button>
              ))}
            </div>
          </SidebarContent>
          
          <SidebarFooter className="border-t px-3 py-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarImage src="" />
                    <AvatarFallback>
                      {user?.name?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <span className={`font-aptos ${collapsed ? 'hidden' : 'block'}`}>
                    {user?.name || 'User'}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-aptos">My Account</DropdownMenuLabel>
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
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 bg-background">
          <div className="p-4 md:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
