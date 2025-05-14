
import { Outlet, useParams } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import { SidebarNavigation } from './navigation/SidebarNavigation';
import { MobileHeader } from './navigation/MobileHeader';
import { MobileNavigation } from './navigation/MobileNavigation';
import { FloatingActionButton } from './navigation/FloatingActionButton';
import { getNavItems } from './navigation/NavigationConfig';

const DashboardLayout = () => {
  const { role } = useParams<{ role: string }>();
  const navItems = getNavItems(role);
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <SidebarNavigation role={role} />

        <div className="flex-1 flex flex-col bg-background">
          {/* Top Header */}
          <MobileHeader navItems={navItems} role={role} />

          {/* Main Content Area */}
          <main className="flex-1 overflow-auto p-4 md:p-6">
            <Outlet />
          </main>

          {/* Floating Action Button */}
          <FloatingActionButton role={role} />

          {/* Bottom Navigation Bar (Mobile) */}
          <MobileNavigation navItems={navItems} />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
