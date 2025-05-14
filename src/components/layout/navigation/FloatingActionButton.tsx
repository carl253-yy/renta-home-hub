
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FloatingActionButtonProps {
  role?: string;
}

export const FloatingActionButton = ({ role }: FloatingActionButtonProps) => {
  const navigate = useNavigate();
  
  const handleAction = () => {
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
  };
  
  return (
    <div className="fixed bottom-20 right-6 md:right-10">
      <Button 
        className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
        onClick={handleAction}
      >
        <Plus size={24} />
      </Button>
    </div>
  );
};
