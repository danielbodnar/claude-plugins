import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Claude Plugins Marketplace',
  description: 'Discover and explore Claude code plugins to enhance your development workflow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Claude Plugins
                </h1>
              </a>
              <nav className="flex items-center gap-6">
                <a href="/" className="text-gray-600 hover:text-gray-900">
                  Marketplace
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Documentation
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Submit Plugin
                </a>
              </nav>
            </div>
          </div>
        </header>
        
        <main>{children}</main>
        
        <footer className="bg-gray-50 border-t border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-600">
              <p>© 2024 Claude Plugins Marketplace. Built with Next.js and TypeScript.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
