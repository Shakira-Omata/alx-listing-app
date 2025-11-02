import Head from 'next/head';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import { SITE_NAME } from '@/constants';

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Find your perfect stay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
            Welcome to {SITE_NAME}
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Find and book unique properties around the world
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card
              title="Luxury Beachfront Villa"
              description="Experience paradise in this stunning beachfront property with breathtaking ocean views"
              image="/assets/placeholder.png"
              price={299}
              rating={4.9}
              location="Malibu, California"
            />
            
            <Card
              title="Cozy Mountain Cabin"
              description="Escape to the mountains in this charming cabin surrounded by nature"
              image="/assets/placeholder.png"
              price={150}
              rating={4.7}
              location="Aspen, Colorado"
            />
            
            <Card
              title="Modern City Apartment"
              description="Stay in the heart of the city with all amenities at your fingertips"
              image="/assets/placeholder.png"
              price={200}
              rating={4.8}
              location="New York, NY"
            />
          </div>

          <div className="flex justify-center gap-4">
            <Button label="View All Listings" variant="primary" />
            <Button label="Learn More" variant="outline" />
          </div>
        </div>
      </main>
    </>
  );
}