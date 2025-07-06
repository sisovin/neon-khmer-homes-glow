
import React, { useState } from 'react';
import { Filter, MapPin, DollarSign, Home, Bed, Bath, Square, Calendar } from 'lucide-react';

const SearchFilters = () => {
  const [filters, setFilters] = useState({
    location: '',
    propertyType: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    minArea: '',
    maxArea: '',
    yearBuilt: ''
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const propertyTypes = ['Apartment', 'House', 'Villa', 'Condo', 'Land', 'Commercial'];
  const bedroomOptions = ['1', '2', '3', '4', '5+'];
  const bathroomOptions = ['1', '2', '3', '4+'];

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      propertyType: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: '',
      minArea: '',
      maxArea: '',
      yearBuilt: ''
    });
  };

  return (
    <div className="glass-panel rounded-2xl p-6 mb-8">
      {/* Filter Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-emerald-400" />
          <h3 className="text-lg font-semibold text-white">Advanced Filters</h3>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={clearFilters}
            className="text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-300"
          >
            Clear All
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-2 bg-emerald-600/20 hover:bg-emerald-600/40 border border-emerald-400/30 text-emerald-400 rounded-lg transition-all duration-300"
          >
            {isExpanded ? 'Less Filters' : 'More Filters'}
          </button>
        </div>
      </div>

      {/* Basic Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Location */}
        <div className="relative">
          <label className="block text-sm font-medium text-emerald-400 mb-2">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Enter location"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 cyber-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
            />
          </div>
        </div>

        {/* Property Type */}
        <div className="relative">
          <label className="block text-sm font-medium text-emerald-400 mb-2">Property Type</label>
          <div className="relative">
            <Home className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <select
              value={filters.propertyType}
              onChange={(e) => handleFilterChange('propertyType', e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 cyber-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 appearance-none"
            >
              <option value="">All Types</option>
              {propertyTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Price Range */}
        <div className="relative">
          <label className="block text-sm font-medium text-emerald-400 mb-2">Min Price</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="number"
              placeholder="Min price"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 cyber-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-emerald-400 mb-2">Max Price</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="number"
              placeholder="Max price"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 cyber-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Expanded Filters */}
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6 animate-fade-in">
          {/* Bedrooms */}
          <div className="relative">
            <label className="block text-sm font-medium text-emerald-400 mb-2">Bedrooms</label>
            <div className="relative">
              <Bed className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <select
                value={filters.bedrooms}
                onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 cyber-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 appearance-none"
              >
                <option value="">Any</option>
                {bedroomOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Bathrooms */}
          <div className="relative">
            <label className="block text-sm font-medium text-emerald-400 mb-2">Bathrooms</label>
            <div className="relative">
              <Bath className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <select
                value={filters.bathrooms}
                onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 cyber-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 appearance-none"
              >
                <option value="">Any</option>
                {bathroomOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Min Area */}
          <div className="relative">
            <label className="block text-sm font-medium text-emerald-400 mb-2">Min Area (sqm)</label>
            <div className="relative">
              <Square className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="number"
                placeholder="Min area"
                value={filters.minArea}
                onChange={(e) => handleFilterChange('minArea', e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 cyber-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
              />
            </div>
          </div>

          {/* Max Area */}
          <div className="relative">
            <label className="block text-sm font-medium text-emerald-400 mb-2">Max Area (sqm)</label>
            <div className="relative">
              <Square className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="number"
                placeholder="Max area"
                value={filters.maxArea}
                onChange={(e) => handleFilterChange('maxArea', e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 cyber-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
              />
            </div>
          </div>

          {/* Year Built */}
          <div className="relative">
            <label className="block text-sm font-medium text-emerald-400 mb-2">Year Built</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="number"
                placeholder="Year built"
                value={filters.yearBuilt}
                onChange={(e) => handleFilterChange('yearBuilt', e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 cyber-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      )}

      {/* Apply Filters Button */}
      <div className="flex justify-center">
        <button className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold rounded-xl neon-glow hover:neon-glow transition-all duration-300 transform hover:scale-105">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;
