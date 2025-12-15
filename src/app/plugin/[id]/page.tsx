import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPluginById } from '@/lib/plugins';

export default function PluginDetailPage({ params }: { params: { id: string } }) {
  const plugin = getPluginById(params.id);

  if (!plugin) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Marketplace
        </Link>

        {/* Plugin Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {plugin.name}
              </h1>
              <p className="text-gray-600">by {plugin.author}</p>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500">Version</span>
              <p className="text-xl font-semibold text-gray-900">{plugin.version}</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-6">{plugin.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {plugin.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
            <div>
              <p className="text-sm text-gray-500 mb-1">Category</p>
              <p className="font-semibold text-gray-900">{plugin.category}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Downloads</p>
              <p className="font-semibold text-gray-900">
                {plugin.downloads.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Rating</p>
              <p className="font-semibold text-gray-900">⭐ {plugin.rating}</p>
            </div>
          </div>
        </div>

        {/* Installation Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Installation</h2>
          <p className="text-gray-600 mb-4">
            Install this plugin using the Claude CLI:
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
            claude plugin install {plugin.id}
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Details</h2>
          <dl className="space-y-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Last Updated</dt>
              <dd className="mt-1 text-gray-900">
                {new Date(plugin.lastUpdated).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </dd>
            </div>
            {plugin.repository && (
              <div>
                <dt className="text-sm font-medium text-gray-500">Repository</dt>
                <dd className="mt-1">
                  <a
                    href={plugin.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    {plugin.repository}
                  </a>
                </dd>
              </div>
            )}
            {plugin.documentation && (
              <div>
                <dt className="text-sm font-medium text-gray-500">Documentation</dt>
                <dd className="mt-1">
                  <a
                    href={plugin.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    {plugin.documentation}
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Install Plugin
          </button>
          {plugin.repository && (
            <a
              href={plugin.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-center"
            >
              View Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
