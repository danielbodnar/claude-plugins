'use client';

import { useState, useMemo } from 'react';
import PluginCard from '@/components/PluginCard';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import { plugins, searchPlugins, getPluginsByCategory } from '@/lib/plugins';
import { PluginCategory } from '@/types/plugin';

const categories: PluginCategory[] = [
  'All',
  'Code Generation',
  'Testing',
  'Documentation',
  'Debugging',
  'Data Processing',
  'API Integration',
  'Utilities',
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PluginCategory>('All');

  const filteredPlugins = useMemo(() => {
    let result = plugins;

    // Apply category filter
    if (selectedCategory !== 'All') {
      result = getPluginsByCategory(selectedCategory);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      result = result.filter(plugin =>
        plugin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plugin.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plugin.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return result;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold mb-4">
            Discover Claude Code Plugins
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Enhance your development workflow with powerful plugins for Claude
          </p>
          <div className="max-w-2xl">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Stats */}
        <div className="mb-8 flex gap-8">
          <div className="text-gray-600">
            <span className="font-semibold text-gray-900">{plugins.length}</span> total plugins
          </div>
          <div className="text-gray-600">
            <span className="font-semibold text-gray-900">{filteredPlugins.length}</span> plugins shown
          </div>
        </div>

        {/* Plugin Grid */}
        {filteredPlugins.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlugins.map((plugin) => (
              <PluginCard key={plugin.id} plugin={plugin} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No plugins found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
