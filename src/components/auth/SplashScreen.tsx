
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '@/components/ui/button';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, role } = useAuth();

  const handleGetStarted = () => {
    navigate('/role-selection');
  };

  useEffect(() => {
    if (isAuthenticated && role) {
      navigate(`/dashboard/${role}`);
    }
  }, [isAuthenticated, navigate, role]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-primary to-secondary">
      <div className="animate-fade-in flex flex-col items-center">
        <div className="w-full max-w-md mb-8">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
            alt="Welcome to QwetuLink" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2 font-aptos">QwetuLink</h1>
        <p className="text-white text-lg mb-8 font-aptos">Your complete rental management solution</p>
        <Button 
          onClick={handleGetStarted} 
          className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 font-aptos"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default SplashScreen;
