import Link from 'next/link';
import { Plugin } from '@/types/plugin';

interface PluginCardProps {
  plugin: Plugin;
}

export default function PluginCard({ plugin }: PluginCardProps) {
  return (
    <Link href={`/plugin/${plugin.id}`}>
      <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer bg-white">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{plugin.name}</h3>
          <span className="text-sm text-gray-500">{plugin.version}</span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{plugin.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {plugin.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{plugin.author}</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              ⭐ {plugin.rating}
            </span>
            <span>
              {plugin.downloads.toLocaleString()} downloads
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
