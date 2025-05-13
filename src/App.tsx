
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Auth Components
import SplashScreen from "./components/auth/SplashScreen";
import RoleSelection from "./components/auth/RoleSelection";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

// Layout Components
import DashboardLayout from "./components/layout/DashboardLayout";

// Dashboard Components
import LandlordDashboard from "./components/dashboard/landlord/LandlordDashboard";
import TenantDashboard from "./components/dashboard/tenant/TenantDashboard";
import CaretakerDashboard from "./components/dashboard/caretaker/CaretakerDashboard";
import HunterDashboard from "./components/dashboard/hunter/HunterDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Auth Routes */}
            <Route path="/" element={<SplashScreen />} />
            <Route path="/role-selection" element={<RoleSelection />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Landlord Routes */}
            <Route path="/dashboard/landlord" element={<DashboardLayout />}>
              <Route index element={<LandlordDashboard />} />
              <Route path="reports" element={<div className="font-aptos">Landlord Reports</div>} />
              <Route path="maintenance" element={<div className="font-aptos">Landlord Maintenance</div>} />
              <Route path="profile" element={<div className="font-aptos">Landlord Profile</div>} />
            </Route>
            
            {/* Tenant Routes */}
            <Route path="/dashboard/tenant" element={<DashboardLayout />}>
              <Route index element={<TenantDashboard />} />
              <Route path="documents" element={<div className="font-aptos">Tenant Documents</div>} />
              <Route path="maintenance" element={<div className="font-aptos">Tenant Maintenance</div>} />
              <Route path="profile" element={<div className="font-aptos">Tenant Profile</div>} />
            </Route>
            
            {/* Caretaker Routes */}
            <Route path="/dashboard/caretaker" element={<DashboardLayout />}>
              <Route index element={<CaretakerDashboard />} />
              <Route path="maintenance" element={<div className="font-aptos">Caretaker Maintenance</div>} />
              <Route path="profile" element={<div className="font-aptos">Caretaker Profile</div>} />
            </Route>
            
            {/* House Hunter Routes */}
            <Route path="/dashboard/hunter" element={<DashboardLayout />}>
              <Route index element={<HunterDashboard />} />
              <Route path="saved" element={<div className="font-aptos">Saved Properties</div>} />
              <Route path="profile" element={<div className="font-aptos">Hunter Profile</div>} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
