# Claude Plugins Marketplace

A modern, responsive marketplace for discovering and exploring Claude code plugins. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🔍 **Search Functionality** - Search plugins by name, description, or tags
- 🏷️ **Category Filtering** - Filter plugins by category (Code Generation, Testing, Documentation, etc.)
- 📊 **Plugin Stats** - View downloads, ratings, and version information
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Fast Performance** - Built with Next.js for optimal performance
- 🎨 **Modern UI** - Clean, intuitive interface with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/danielbodnar/claude-plugins.git
cd claude-plugins
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
claude-plugins/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── plugin/[id]/    # Plugin detail pages
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page (marketplace)
│   │   └── globals.css     # Global styles
│   ├── components/         # React components
│   │   ├── PluginCard.tsx
│   │   ├── SearchBar.tsx
│   │   └── CategoryFilter.tsx
│   ├── lib/               # Utilities and data
│   │   └── plugins.ts     # Plugin data and helpers
│   └── types/             # TypeScript type definitions
│       └── plugin.ts
├── public/                # Static assets
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## Plugin Categories

- **Code Generation** - Tools for generating code
- **Testing** - Testing utilities and frameworks
- **Documentation** - Documentation generation tools
- **Debugging** - Debugging assistants and tools
- **Data Processing** - Data transformation and ETL tools
- **API Integration** - API connection and integration tools
- **Utilities** - General purpose utilities

## Adding New Plugins

To add new plugins to the marketplace, edit the `src/lib/plugins.ts` file and add a new plugin object to the `plugins` array:

```typescript
{
  id: 'your-plugin-id',
  name: 'Your Plugin Name',
  description: 'A brief description of your plugin',
  author: 'Your Name',
  version: '1.0.0',
  category: 'Code Generation',
  tags: ['tag1', 'tag2'],
  downloads: 0,
  rating: 4.5,
  lastUpdated: '2024-12-15',
  repository: 'https://github.com/username/repo',
  documentation: 'https://docs.example.com',
}
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.