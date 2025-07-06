
import React from 'react';
import { MapPin, Bed, Bath, Square, Heart, Eye } from 'lucide-react';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: 'Modern Villa in Toul Kork',
      price: '$450,000',
      location: 'Toul Kork, Phnom Penh',
      bedrooms: 4,
      bathrooms: 3,
      area: '300 sqm',
      image: '/placeholder.svg',
      featured: true,
      views: 245
    },
    {
      id: 2,
      title: 'Luxury Apartment BKK1',
      price: '$280,000',
      location: 'BKK1, Phnom Penh',
      bedrooms: 3,
      bathrooms: 2,
      area: '150 sqm',
      image: '/placeholder.svg',
      featured: false,
      views: 189
    },
    {
      id: 3,
      title: 'Contemporary House Chamkarmon',
      price: '$380,000',
      location: 'Chamkarmon, Phnom Penh',
      bedrooms: 5,
      bathrooms: 4,
      area: '250 sqm',
      image: '/placeholder.svg',
      featured: true,
      views: 312
    },
    {
      id: 4,
      title: 'Penthouse Sen Sok',
      price: '$650,000',
      location: 'Sen Sok, Phnom Penh',
      bedrooms: 6,
      bathrooms: 5,
      area: '400 sqm',
      image: '/placeholder.svg',
      featured: false,
      views: 156
    },
    {
      id: 5,
      title: 'Smart Home Daun Penh',
      price: '$320,000',
      location: 'Daun Penh, Phnom Penh',
      bedrooms: 3,
      bathrooms: 2,
      area: '180 sqm',
      image: '/placeholder.svg',
      featured: true,
      views: 278
    },
    {
      id: 6,
      title: 'Garden Villa Russian Market',
      price: '$520,000',
      location: 'Russian Market, Phnom Penh',
      bedrooms: 4,
      bathrooms: 3,
      area: '320 sqm',
      image: '/placeholder.svg',
      featured: false,
      views: 423
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
              Featured
            </span>
            <span className="neon-text text-emerald-400 ml-3">Properties</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover hand-picked premium properties with cutting-edge amenities
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group relative glass-panel rounded-2xl overflow-hidden hover:neon-glow transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Featured Badge */}
              {property.featured && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full neon-glow animate-neon-pulse">
                  FEATURED
                </div>
              )}

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 z-10 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-white hover:text-emerald-400 hover:bg-slate-700/80 transition-colors duration-300">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-white hover:text-emerald-400 hover:bg-slate-700/80 transition-colors duration-300">
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Property Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center">
                  <div className="text-6xl text-slate-500">🏠</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                
                {/* Views Counter */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-1 text-white text-sm">
                  <Eye className="w-4 h-4" />
                  <span>{property.views} views</span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {property.title}
                  </h3>
                  <span className="text-2xl font-bold text-emerald-400 neon-text">
                    {property.price}
                  </span>
                </div>

                <div className="flex items-center text-gray-400 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Property Features */}
                <div className="flex items-center justify-between text-gray-300 mb-6">
                  <div className="flex items-center space-x-1">
                    <Bed className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">{property.bedrooms} beds</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">{property.bathrooms} baths</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">{property.area}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full py-3 bg-gradient-to-r from-emerald-600/20 to-emerald-500/20 hover:from-emerald-600 hover:to-emerald-500 border border-emerald-400/30 hover:border-emerald-400 text-emerald-400 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:neon-glow">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-12 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold rounded-xl neon-glow hover:neon-glow transition-all duration-300 transform hover:scale-105">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
