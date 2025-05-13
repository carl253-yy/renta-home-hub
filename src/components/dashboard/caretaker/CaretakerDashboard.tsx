
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const mockData = {
  properties: [
    { id: 1, name: 'Greenview Apartments', units: 12, address: '123 Green St, City' },
    { id: 2, name: 'Sunset Heights', units: 8, address: '456 Sunset Blvd, City' },
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
};

const statusColors = {
  'pending': 'bg-yellow-100 text-yellow-800',
  'in-progress': 'bg-blue-100 text-blue-800',
  'completed': 'bg-green-100 text-green-800',
  'declined': 'bg-red-100 text-red-800',
};

const priorityColors = {
  'low': 'bg-blue-100 text-blue-800',
  'medium': 'bg-yellow-100 text-yellow-800',
  'high': 'bg-red-100 text-red-800',
};

const CaretakerDashboard: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Caretaker Dashboard</h1>
        <p className="text-muted-foreground">Manage your assigned properties and tasks</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Managed Properties</CardTitle>
            <CardDescription>Properties under your supervision</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockData.properties.map((property) => (
                <div key={property.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{property.name}</h4>
                    <Badge>{property.units} units</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{property.address}</p>
                  <div className="mt-4 flex space-x-2">
                    <Button size="sm" variant="outline">Inspect</Button>
                    <Button size="sm" variant="outline">Register Tenant</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Tenant Registrations</CardTitle>
            <CardDescription>New tenant applications</CardDescription>
          </CardHeader>
          <CardContent>
            {mockData.pendingRegistrations.length === 0 ? (
              <p className="text-sm text-muted-foreground">No pending registrations.</p>
            ) : (
              <div className="space-y-4">
                {mockData.pendingRegistrations.map((registration) => (
                  <div key={registration.id} className="border rounded-lg p-4">
                    <h4 className="font-semibold">{registration.name}</h4>
                    <p className="text-sm">{registration.unit}, {registration.property}</p>
                    <p className="text-xs text-muted-foreground">Applied on {registration.date}</p>
                    <div className="mt-4 flex space-x-2">
                      <Button size="sm" variant="outline">Review</Button>
                      <Button size="sm" variant="default">Submit to Landlord</Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Create New Registration</Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Maintenance Requests</CardTitle>
            <CardDescription>Active maintenance tasks</CardDescription>
          </div>
          <Badge variant="outline">{mockData.maintenanceRequests.length} Active</Badge>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockData.maintenanceRequests.map((request) => (
              <div key={request.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{request.title}</h4>
                    <p className="text-sm text-muted-foreground">{request.unit} - {request.date}</p>
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
                <div className="mt-4 flex space-x-2">
                  <Button size="sm" variant="outline">Update Status</Button>
                  <Button size="sm" variant="default">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">View Completed Tasks</Button>
          <Button variant="default">Create Task</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CaretakerDashboard;
