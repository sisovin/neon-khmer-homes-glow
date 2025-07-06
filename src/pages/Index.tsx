
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SearchFilters from '../components/SearchFilters';
import FeaturedProperties from '../components/FeaturedProperties';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* Search & Properties Section */}
      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchFilters />
        </div>
      </section>
      
      <FeaturedProperties />
      <Footer />
    </div>
  );
};

export default Index;
