
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '../../types/user';
import { useAuth } from '../../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface RoleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  role: UserRole;
  onClick: (role: UserRole) => void;
}

const RoleCard: React.FC<RoleCardProps> = ({ title, description, icon, role, onClick }) => {
  return (
    <Card 
      onClick={() => onClick(role)}
      className="cursor-pointer card-hover border border-border bg-card h-full"
    >
      <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
        <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 font-aptos">{title}</h3>
        <p className="text-muted-foreground text-sm font-aptos">{description}</p>
      </CardContent>
    </Card>
  );
};

const RoleSelection: React.FC = () => {
  const navigate = useNavigate();
  const { setRole } = useAuth();

  const handleRoleSelect = (role: UserRole) => {
    setRole(role);
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in">
        <div className="w-full max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4 font-aptos">Welcome to QwetuLink</h1>
            <p className="text-lg text-muted-foreground font-aptos">Select your role to get started</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <RoleCard
              title="Landlord"
              description="Manage your properties, tenants, and income"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                  <path d="M8 7V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3"></path>
                  <path d="M12 12v5"></path>
                  <path d="M10 12h4"></path>
                </svg>
              }
              role="landlord"
              onClick={handleRoleSelect}
            />
            
            <RoleCard
              title="Tenant"
              description="Pay rent, submit maintenance requests, and access documents"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                  <path d="M12 3v9"></path>
                  <path d="M10 12h4"></path>
                </svg>
              }
              role="tenant"
              onClick={handleRoleSelect}
            />
            
            <RoleCard
              title="Caretaker"
              description="Manage properties, register tenants, and handle maintenance"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              }
              role="caretaker"
              onClick={handleRoleSelect}
            />
            
            <RoleCard
              title="House Hunter"
              description="Find and apply for rental properties"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              }
              role="hunter"
              onClick={handleRoleSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
