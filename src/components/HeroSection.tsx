
import React, { useState } from 'react';
import { Search, MapPin, Home, Building, DollarSign } from 'lucide-react';

const HeroSection = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
    bedrooms: ''
  });

  const propertyTypes = ['Apartment', 'House', 'Villa', 'Condo', 'Land'];
  const priceRanges = ['$50k - $100k', '$100k - $200k', '$200k - $500k', '$500k+'];
  const bedroomOptions = ['1 BR', '2 BR', '3 BR', '4+ BR'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%2310b981\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-400/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-400/20 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-emerald-400/15 rounded-full blur-md animate-float" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Content */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-white via-emerald-400 to-white bg-clip-text text-transparent">
              Find Your Dream
            </span>
            <br />
            <span className="neon-text text-emerald-400">Property</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the perfect home in Cambodia with our cutting-edge real estate platform
          </p>
        </div>

        {/* Search Form */}
        <div className="glass-panel rounded-2xl p-8 max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Location */}
            <div className="relative">
              <label className="block text-sm font-medium text-emerald-400 mb-2">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter city or area"
                  value={searchData.location}
                  onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 cyber-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
                />
              </div>
            </div>

            {/* Property Type */}
            <div className="relative">
              <label className="block text-sm font-medium text-emerald-400 mb-2">Property Type</label>
              <div className="relative">
                <Home className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  value={searchData.propertyType}
                  onChange={(e) => setSearchData({...searchData, propertyType: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 cyber-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 appearance-none"
                >
                  <option value="">Select type</option>
                  {propertyTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Price Range */}
            <div className="relative">
              <label className="block text-sm font-medium text-emerald-400 mb-2">Price Range</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  value={searchData.priceRange}
                  onChange={(e) => setSearchData({...searchData, priceRange: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 cyber-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 appearance-none"
                >
                  <option value="">Select range</option>
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Bedrooms */}
            <div className="relative">
              <label className="block text-sm font-medium text-emerald-400 mb-2">Bedrooms</label>
              <div className="relative">
                <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  value={searchData.bedrooms}
                  onChange={(e) => setSearchData({...searchData, bedrooms: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 cyber-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 appearance-none"
                >
                  <option value="">Select bedrooms</option>
                  {bedroomOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <button className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold rounded-xl neon-glow hover:neon-glow transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
            <Search className="w-5 h-5" />
            <span>Search Properties</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { number: '10K+', label: 'Properties' },
            { number: '500+', label: 'Agents' },
            { number: '50+', label: 'Cities' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 neon-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
