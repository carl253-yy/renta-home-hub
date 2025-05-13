
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, role } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAuthenticated && role) {
        navigate(`/dashboard/${role}`);
      } else if (isAuthenticated) {
        navigate('/role-selection');
      } else {
        navigate('/role-selection');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isAuthenticated, navigate, role]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-brand-blue to-brand-blue-light">
      <div className="animate-fade-in flex flex-col items-center">
        <div className="rounded-full bg-white p-6 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#074173"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">RentaHub</h1>
        <p className="text-white text-lg">Your complete rental management solution</p>
      </div>
    </div>
  );
};

export default SplashScreen;
