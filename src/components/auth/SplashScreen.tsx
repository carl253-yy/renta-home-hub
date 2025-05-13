
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
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-primary to-secondary relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://wallpaperaccess.com/full/3434362.jpg" 
          alt="QwetuLink" 
          className="w-full h-full object-cover"
        />
        {/* Overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="animate-fade-in flex flex-col items-center z-10">
        <h1 className="text-5xl font-bold text-white mb-2 font-aptos">QwetuLink</h1>
        <p className="text-white text-xl mb-10 font-aptos">Your complete rental management solution</p>
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
