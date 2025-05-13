
import { useState } from 'react';
import { Outlet, useNavigate, useParams, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { SidebarProvider, Sidebar, SidebarContent, SidebarFooter } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Home, FileText, Settings, LogOut, Wrench, BarChart3, MessageSquare, Heart, Plus } from 'lucide-react';

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { role } = useParams<{ role: string }>();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  
  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const landlordNavItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/dashboard/landlord' },
    { icon: <FileText size={20} />, label: 'Documents', path: '/dashboard/landlord/documents' },
    { icon: <BarChart3 size={20} />, label: 'Reports', path: '/dashboard/landlord/reports' },
    { icon: <Wrench size={20} />, label: 'Maintenance', path: '/dashboard/landlord/maintenance' },
    { icon: <MessageSquare size={20} />, label: 'Messages', path: '/dashboard/landlord/messages' },
  ];
  
  const tenantNavItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/dashboard/tenant' },
    { icon: <FileText size={20} />, label: 'Documents', path: '/dashboard/tenant/documents' },
    { icon: <Wrench size={20} />, label: 'Maintenance', path: '/dashboard/tenant/maintenance' },
    { icon: <MessageSquare size={20} />, label: 'Messages', path: '/dashboard/tenant/messages' },
  ];
  
  const caretakerNavItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/dashboard/caretaker' },
    { icon: <FileText size={20} />, label: 'Reports', path: '/dashboard/caretaker/reports' },
    { icon: <Wrench size={20} />, label: 'Maintenance', path: '/dashboard/caretaker/maintenance' },
    { icon: <MessageSquare size={20} />, label: 'Messages', path: '/dashboard/caretaker/messages' },
  ];
  
  const hunterNavItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/dashboard/hunter' },
    { icon: <FileText size={20} />, label: 'Listings', path: '/dashboard/hunter/listings' },
    { icon: <Heart size={20} />, label: 'Saved', path: '/dashboard/hunter/saved' },
    { icon: <MessageSquare size={20} />, label: 'Messages', path: '/dashboard/hunter/messages' },
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

  // Function to determine if an item is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r border-border bg-sidebar hidden md:block" collapsible="icon">
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
                  variant={isActive(item.path) ? "default" : "ghost"}
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

        <div className="flex-1 flex flex-col bg-background">
          {/* Top Header */}
          <header className="border-b border-border p-4 flex items-center justify-between bg-white">
            <div className="flex items-center">
              {/* Reserved space for future logo */}
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

          {/* Main Content Area */}
          <main className="flex-1 overflow-auto p-4 md:p-6">
            <Outlet />
          </main>

          {/* Floating Action Button - context aware based on role and screen */}
          <div className="fixed bottom-20 right-6 md:right-10">
            <Button 
              className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
              onClick={() => {
                // This would be context aware based on current route
                switch (role) {
                  case 'landlord': 
                    navigate('/dashboard/landlord/add-property');
                    break;
                  case 'tenant': 
                    navigate('/dashboard/tenant/new-maintenance');
                    break;
                  case 'caretaker': 
                    navigate('/dashboard/caretaker/new-report');
                    break;
                  case 'hunter': 
                    navigate('/dashboard/hunter/filter');
                    break;
                }
              }}
            >
              <Plus size={24} />
            </Button>
          </div>

          {/* Bottom Navigation Bar (Mobile) */}
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
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
