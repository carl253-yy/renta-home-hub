
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

// Mock data for the caretaker profile and dashboard
const mockData = {
  profile: {
    name: "John Mbugua",
    age: 34,
    phone: "+254 722 123 456",
    avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" // Man in checkered shirt placeholder
  },
  properties: [
    { id: 1, name: 'Greenview Apartments', units: 12, address: '123 Green St, Nairobi', image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04' },
    { id: 2, name: 'Sunset Heights', units: 8, address: '456 Sunset Blvd, Mombasa', image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04' },
  ],
  pendingInspections: 3,
  maintenanceRequests: [
    { id: 1, unit: 'Apt 3B', title: 'Kitchen sink leaking', status: 'in-progress', priority: 'medium', date: '2025-05-08' },
    { id: 2, unit: 'Apt 5A', title: 'Bedroom ceiling fan not working', status: 'pending', priority: 'low', date: '2025-05-10' },
    { id: 3, unit: 'Apt 1C', title: 'No hot water', status: 'pending', priority: 'high', date: '2025-05-11' },
  ],
  pendingRegistrations: [
    { id: 1, name: 'Robert Johnson', unit: 'Apt 2D', property: 'Greenview Apartments', date: '2025-05-12' },
  ],
  inspectionReports: [
    { id: 1, property: 'Greenview Apartments', unit: 'Apt 4B', status: 'completed', date: '2025-05-05' },
    { id: 2, property: 'Sunset Heights', unit: 'Apt 2A', status: 'pending', date: '2025-05-15' }
  ],
  expenses: [
    { id: 1, title: 'Plumbing supplies', amount: 2500, status: 'pending', date: '2025-05-10' },
    { id: 2, title: 'Light fixtures', amount: 1800, status: 'approved', date: '2025-05-08' }
  ]
};

const statusColors = {
  'pending': 'bg-yellow-100 text-yellow-800',
  'in-progress': 'bg-blue-100 text-blue-800',
  'completed': 'bg-green-100 text-green-800',
  'declined': 'bg-red-100 text-red-800',
  'approved': 'bg-green-100 text-green-800',
};

const priorityColors = {
  'low': 'bg-blue-100 text-blue-800',
  'medium': 'bg-yellow-100 text-yellow-800',
  'high': 'bg-red-100 text-red-800',
};

const CaretakerDashboard: React.FC = () => {
  const { toast } = useToast();
  
  const handleUpdateStatus = (id: number, type: string) => {
    toast({
      title: "Status Updated",
      description: `${type} #${id} status has been updated successfully.`,
    });
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-aptos">Caretaker Dashboard</h1>
        <p className="text-muted-foreground font-aptos">Manage your assigned properties and tasks</p>
      </div>

      {/* Profile & Quick Stats */}
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="w-full md:w-1/3">
          <CardHeader>
            <CardTitle className="font-aptos">Profile</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src={mockData.profile.avatar} />
              <AvatarFallback className="text-lg">{mockData.profile.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold mb-1 font-aptos">{mockData.profile.name}</h3>
            <p className="text-muted-foreground font-aptos">{mockData.profile.age} years old</p>
            <p className="font-aptos">{mockData.profile.phone}</p>
            <div className="mt-4 w-full">
              <Button variant="outline" className="w-full font-aptos">Edit Profile</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full md:w-2/3">
          <CardHeader>
            <CardTitle className="font-aptos">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <h4 className="text-lg font-semibold text-blue-700 font-aptos">{mockData.properties.length}</h4>
                <p className="text-sm text-muted-foreground font-aptos">Properties</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <h4 className="text-lg font-semibold text-blue-700 font-aptos">{mockData.pendingInspections}</h4>
                <p className="text-sm text-muted-foreground font-aptos">Pending Inspections</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <h4 className="text-lg font-semibold text-blue-700 font-aptos">{mockData.maintenanceRequests.length}</h4>
                <p className="text-sm text-muted-foreground font-aptos">Maintenance Requests</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <h4 className="text-lg font-semibold text-blue-700 font-aptos">{mockData.pendingRegistrations.length}</h4>
                <p className="text-sm text-muted-foreground font-aptos">Pending Registrations</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Tabs */}
      <Tabs defaultValue="properties" className="w-full">
        <TabsList className="font-aptos">
          <TabsTrigger value="properties">Properties</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="tenants">Tenants</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
        </TabsList>

        {/* Properties Tab */}
        <TabsContent value="properties" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockData.properties.map((property) => (
              <Card key={property.id} className="overflow-hidden">
                <div className="h-40 bg-blue-100">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-aptos">{property.name}</CardTitle>
                    <Badge>{property.units} units</Badge>
                  </div>
                  <CardDescription className="font-aptos">{property.address}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Button size="sm" variant="outline" className="font-aptos">Inspect</Button>
                  <Button size="sm" className="font-aptos">Manage Units</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Maintenance Tab */}
        <TabsContent value="maintenance" className="space-y-4">
          {mockData.maintenanceRequests.map((request) => (
            <Card key={request.id} className="mb-4">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-aptos">{request.title}</CardTitle>
                    <CardDescription className="font-aptos">{request.unit} - {request.date}</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${statusColors[request.status as keyof typeof statusColors]}`}>
                      {request.status}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[request.priority as keyof typeof priorityColors]}`}>
                      {request.priority}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="font-aptos" onClick={() => handleUpdateStatus(request.id, 'Maintenance Request')}>
                  Update Status
                </Button>
                <Button className="font-aptos">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        {/* Tenants Tab */}
        <TabsContent value="tenants" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-aptos">Pending Tenant Registrations</CardTitle>
              <CardDescription className="font-aptos">Review tenant registrations before submitting for approval</CardDescription>
            </CardHeader>
            <CardContent>
              {mockData.pendingRegistrations.length === 0 ? (
                <p className="text-sm text-muted-foreground font-aptos">No pending registrations.</p>
              ) : (
                <div className="space-y-4">
                  {mockData.pendingRegistrations.map((registration) => (
                    <div key={registration.id} className="border rounded-lg p-4">
                      <h4 className="font-semibold font-aptos">{registration.name}</h4>
                      <p className="text-sm font-aptos">{registration.unit}, {registration.property}</p>
                      <p className="text-xs text-muted-foreground font-aptos">Applied on {registration.date}</p>
                      <div className="mt-4 flex space-x-2">
                        <Button size="sm" variant="outline" className="font-aptos">Review</Button>
                        <Button size="sm" className="font-aptos" onClick={() => handleUpdateStatus(registration.id, 'Registration')}>Submit to Landlord</Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full font-aptos">Create New Registration</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-aptos">Inspection Reports</CardTitle>
              <CardDescription className="font-aptos">Manage property inspection reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockData.inspectionReports.map((report) => (
                  <div key={report.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold font-aptos">{report.property}</h4>
                        <p className="text-sm font-aptos">{report.unit}</p>
                        <p className="text-xs text-muted-foreground font-aptos">Scheduled for {report.date}</p>
                      </div>
                      <Badge className={`${statusColors[report.status as keyof typeof statusColors]}`}>
                        {report.status}
                      </Badge>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button size="sm" variant="outline" className="font-aptos">View</Button>
                      {report.status === 'pending' && (
                        <Button size="sm" className="font-aptos">Complete Inspection</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full font-aptos">New Inspection</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Expenses Tab */}
        <TabsContent value="expenses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-aptos">Expense Claims</CardTitle>
              <CardDescription className="font-aptos">Manage expense claims and reimbursements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockData.expenses.map((expense) => (
                  <div key={expense.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold font-aptos">{expense.title}</h4>
                        <p className="text-sm font-aptos">KSh {expense.amount.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground font-aptos">Submitted on {expense.date}</p>
                      </div>
                      <Badge className={`${statusColors[expense.status as keyof typeof statusColors]}`}>
                        {expense.status}
                      </Badge>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button size="sm" variant="outline" className="font-aptos">View Details</Button>
                      {expense.status === 'pending' && (
                        <Button size="sm" className="font-aptos" onClick={() => handleUpdateStatus(expense.id, 'Expense')}>
                          Send Reminder
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full font-aptos">Submit New Expense</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CaretakerDashboard;
