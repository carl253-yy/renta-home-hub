
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const mockListings = [
  {
    id: 1,
    title: 'Modern 2 Bedroom Apartment',
    location: 'Downtown, City',
    price: 1200,
    bedrooms: 2,
    bathrooms: 1,
    area: 850,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    available: true,
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Spacious 3 Bedroom Penthouse',
    location: 'Riverside, City',
    price: 1800,
    bedrooms: 3,
    bathrooms: 2,
    area: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
    available: true,
    isFeatured: false,
  },
  {
    id: 3,
    title: 'Cozy Studio Apartment',
    location: 'University District, City',
    price: 800,
    bedrooms: 0,
    bathrooms: 1,
    area: 450,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    available: true,
    isFeatured: false,
  },
  {
    id: 4,
    title: 'Family Home with Garden',
    location: 'Suburban Area, City',
    price: 2200,
    bedrooms: 4,
    bathrooms: 2.5,
    area: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126',
    available: true,
    isFeatured: true,
  },
];

const HunterDashboard: React.FC = () => {
  const [priceRange, setPriceRange] = useState([500, 2500]);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (listingId: number) => {
    if (favorites.includes(listingId)) {
      setFavorites(favorites.filter(id => id !== listingId));
    } else {
      setFavorites([...favorites, listingId]);
    }
  };

  const filteredListings = mockListings.filter(listing => 
    listing.price >= priceRange[0] && 
    listing.price <= priceRange[1] &&
    (searchQuery === '' || 
     listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     listing.location.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Find Your Perfect Home</h1>
        <p className="text-muted-foreground">Browse available rental properties</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Filters</CardTitle>
          <CardDescription>Narrow down your search</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Input
              placeholder="Search by location or property name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-sm font-medium">Price Range</p>
              <p className="text-sm text-muted-foreground">${priceRange[0]} - ${priceRange[1]}</p>
            </div>
            <Slider
              defaultValue={[500, 2500]}
              min={500}
              max={3000}
              step={100}
              value={priceRange}
              onValueChange={setPriceRange}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">1 Bedroom</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">2 Bedrooms</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">3+ Bedrooms</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Parking</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Pets Allowed</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Furnished</Badge>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="all">All Properties</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="favorites">Favorites ({favorites.length})</TabsTrigger>
          </TabsList>
          <p className="text-sm text-muted-foreground">{filteredListings.length} properties found</p>
        </div>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((listing) => (
              <Card key={listing.id} className="overflow-hidden card-hover">
                <div className="relative h-48">
                  <img
                    src={listing.imageUrl}
                    alt={listing.title}
                    className="w-full h-full object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    onClick={() => toggleFavorite(listing.id)}
                  >
                    {favorites.includes(listing.id) ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#074173" stroke="#074173" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    )}
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold">{listing.title}</h3>
                    <span className="text-primary font-bold">${listing.price}/mo</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{listing.location}</p>
                  <div className="flex justify-between text-sm">
                    <span>{listing.bedrooms} {listing.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
                    <span>{listing.bathrooms} {listing.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
                    <span>{listing.area} sq ft</span>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50 p-4">
                  <div className="flex space-x-2 w-full">
                    <Button variant="outline" className="flex-1">Schedule Visit</Button>
                    <Button className="flex-1">View Details</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="featured">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.filter(listing => listing.isFeatured).map((listing) => (
              <Card key={listing.id} className="overflow-hidden card-hover">
                <div className="relative h-48">
                  <img
                    src={listing.imageUrl}
                    alt={listing.title}
                    className="w-full h-full object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    onClick={() => toggleFavorite(listing.id)}
                  >
                    {favorites.includes(listing.id) ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#074173" stroke="#074173" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    )}
                  </Button>
                  <Badge className="absolute top-2 left-2 bg-primary">Featured</Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold">{listing.title}</h3>
                    <span className="text-primary font-bold">${listing.price}/mo</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{listing.location}</p>
                  <div className="flex justify-between text-sm">
                    <span>{listing.bedrooms} {listing.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
                    <span>{listing.bathrooms} {listing.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
                    <span>{listing.area} sq ft</span>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50 p-4">
                  <div className="flex space-x-2 w-full">
                    <Button variant="outline" className="flex-1">Schedule Visit</Button>
                    <Button className="flex-1">View Details</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="favorites">
          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No favorites yet</h3>
              <p className="text-muted-foreground mb-4">Click the heart icon on properties you like to add them to favorites</p>
              <Button onClick={() => document.querySelector('[data-value="all"]')?.click()}>Browse Properties</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockListings.filter(listing => favorites.includes(listing.id)).map((listing) => (
                <Card key={listing.id} className="overflow-hidden card-hover">
                  <div className="relative h-48">
                    <img
                      src={listing.imageUrl}
                      alt={listing.title}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                      onClick={() => toggleFavorite(listing.id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#074173" stroke="#074173" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold">{listing.title}</h3>
                      <span className="text-primary font-bold">${listing.price}/mo</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{listing.location}</p>
                    <div className="flex justify-between text-sm">
                      <span>{listing.bedrooms} {listing.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
                      <span>{listing.bathrooms} {listing.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
                      <span>{listing.area} sq ft</span>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/50 p-4">
                    <div className="flex space-x-2 w-full">
                      <Button variant="outline" className="flex-1">Schedule Visit</Button>
                      <Button className="flex-1">View Details</Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HunterDashboard;
