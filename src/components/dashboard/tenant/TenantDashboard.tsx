
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const mockData = {
  name: 'John Smith',
  unit: 'Apt 3B, Greenview Apartments',
  rentDue: 1200,
  rentDueDate: '2025-06-01',
  lease: {
    startDate: '2025-01-15',
    endDate: '2026-01-14',
  },
  maintenanceRequests: [
    { id: 1, title: 'Kitchen sink leaking', status: 'in-progress', date: '2025-05-08' },
    { id: 2, title: 'Bedroom ceiling fan not working', status: 'pending', date: '2025-05-10' },
  ],
  recentPayments: [
    { id: 1, amount: 1200, date: '2025-05-01', status: 'completed' },
    { id: 2, amount: 1200, date: '2025-04-01', status: 'completed' },
    { id: 3, amount: 1200, date: '2025-03-01', status: 'completed' },
  ],
};

const statusColors = {
  'pending': 'bg-yellow-100 text-yellow-800',
  'in-progress': 'bg-blue-100 text-blue-800',
  'completed': 'bg-green-100 text-green-800',
  'declined': 'bg-red-100 text-red-800',
};

const TenantDashboard: React.FC = () => {
  // Calculate days until rent is due
  const today = new Date();
  const dueDate = new Date(mockData.rentDueDate);
  const diffTime = dueDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  // Calculate lease progress
  const leaseStartDate = new Date(mockData.lease.startDate);
  const leaseEndDate = new Date(mockData.lease.endDate);
  const totalLeaseDays = (leaseEndDate.getTime() - leaseStartDate.getTime()) / (1000 * 60 * 60 * 24);
  const daysElapsed = (today.getTime() - leaseStartDate.getTime()) / (1000 * 60 * 60 * 24);
  const leaseProgress = Math.min(Math.max((daysElapsed / totalLeaseDays) * 100, 0), 100);

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome, {mockData.name}</h1>
        <p className="text-muted-foreground">{mockData.unit}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-2 border-primary">
          <CardHeader>
            <CardTitle>Rent Due</CardTitle>
            <CardDescription>{diffDays > 0 ? `Due in ${diffDays} days` : 'Due today!'}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${mockData.rentDue.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground">Due on {mockData.rentDueDate}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Pay Now</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lease Status</CardTitle>
            <CardDescription>Your lease period</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>{mockData.lease.startDate}</span>
                <span>{mockData.lease.endDate}</span>
              </div>
              <Progress value={leaseProgress} className="h-2" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                {Math.floor(totalLeaseDays - daysElapsed)} days remaining on your lease
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View Lease Details</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Maintenance</CardTitle>
            <CardDescription>Your active requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockData.maintenanceRequests.length === 0 ? (
                <p className="text-sm text-muted-foreground">No active maintenance requests.</p>
              ) : (
                mockData.maintenanceRequests.map((request) => (
                  <div key={request.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{request.title}</p>
                      <p className="text-xs text-muted-foreground">{request.date}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${statusColors[request.status as keyof typeof statusColors]}`}>
                      {request.status}
                    </span>
                  </div>
                ))
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Create Request</Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
          <CardDescription>Your recent rent payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockData.recentPayments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">${payment.amount}</p>
                  <p className="text-xs text-muted-foreground">{payment.date}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${statusColors[payment.status as keyof typeof statusColors]}`}>
                  {payment.status}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">View All Payments</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TenantDashboard;
