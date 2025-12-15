import { Plugin } from '@/types/plugin';

export const plugins: Plugin[] = [
  {
    id: 'code-reviewer',
    name: 'Code Reviewer',
    description: 'Automatically review code for best practices, security vulnerabilities, and potential bugs.',
    author: 'Claude Team',
    version: '1.2.0',
    category: 'Code Generation',
    tags: ['code-review', 'security', 'best-practices'],
    downloads: 15420,
    rating: 4.8,
    lastUpdated: '2024-12-10',
    repository: 'https://github.com/claude/code-reviewer',
    documentation: 'https://docs.claude.com/plugins/code-reviewer',
  },
  {
    id: 'test-generator',
    name: 'Test Generator',
    description: 'Generate comprehensive unit tests for your code with various testing frameworks.',
    author: 'DevTools Inc',
    version: '2.1.3',
    category: 'Testing',
    tags: ['testing', 'unit-tests', 'automation'],
    downloads: 23150,
    rating: 4.9,
    lastUpdated: '2024-12-12',
    repository: 'https://github.com/devtools/test-generator',
    documentation: 'https://docs.devtools.com/test-generator',
  },
  {
    id: 'doc-writer',
    name: 'Documentation Writer',
    description: 'Generate clear and comprehensive documentation for your codebase automatically.',
    author: 'DocMaster',
    version: '1.5.2',
    category: 'Documentation',
    tags: ['documentation', 'markdown', 'api-docs'],
    downloads: 18920,
    rating: 4.7,
    lastUpdated: '2024-12-08',
    repository: 'https://github.com/docmaster/doc-writer',
  },
  {
    id: 'bug-hunter',
    name: 'Bug Hunter',
    description: 'Advanced debugging assistant that helps identify and fix bugs in your code.',
    author: 'Debug Squad',
    version: '3.0.1',
    category: 'Debugging',
    tags: ['debugging', 'bug-fixing', 'error-handling'],
    downloads: 31250,
    rating: 4.9,
    lastUpdated: '2024-12-14',
    repository: 'https://github.com/debugsquad/bug-hunter',
    documentation: 'https://docs.debugsquad.com/bug-hunter',
  },
  {
    id: 'data-transformer',
    name: 'Data Transformer',
    description: 'Transform and process data between different formats with ease.',
    author: 'DataFlow',
    version: '1.8.0',
    category: 'Data Processing',
    tags: ['data', 'transformation', 'ETL'],
    downloads: 12340,
    rating: 4.6,
    lastUpdated: '2024-12-05',
    repository: 'https://github.com/dataflow/data-transformer',
  },
  {
    id: 'api-connector',
    name: 'API Connector',
    description: 'Connect to various APIs and generate integration code automatically.',
    author: 'API Tools',
    version: '2.3.0',
    category: 'API Integration',
    tags: ['api', 'integration', 'rest', 'graphql'],
    downloads: 28760,
    rating: 4.8,
    lastUpdated: '2024-12-11',
    repository: 'https://github.com/apitools/api-connector',
    documentation: 'https://docs.apitools.com/api-connector',
  },
  {
    id: 'code-refactor',
    name: 'Code Refactor',
    description: 'Refactor legacy code to modern standards and best practices.',
    author: 'Refactor Pro',
    version: '1.9.5',
    category: 'Code Generation',
    tags: ['refactoring', 'modernization', 'code-quality'],
    downloads: 19870,
    rating: 4.7,
    lastUpdated: '2024-12-09',
    repository: 'https://github.com/refactorpro/code-refactor',
  },
  {
    id: 'performance-analyzer',
    name: 'Performance Analyzer',
    description: 'Analyze code performance and suggest optimizations.',
    author: 'PerformanceTeam',
    version: '2.0.2',
    category: 'Utilities',
    tags: ['performance', 'optimization', 'profiling'],
    downloads: 14560,
    rating: 4.6,
    lastUpdated: '2024-12-13',
    repository: 'https://github.com/perfteam/performance-analyzer',
  },
  {
    id: 'security-scanner',
    name: 'Security Scanner',
    description: 'Scan your code for security vulnerabilities and provide remediation advice.',
    author: 'SecureCoding',
    version: '3.1.0',
    category: 'Code Generation',
    tags: ['security', 'vulnerability', 'scanning'],
    downloads: 35420,
    rating: 4.9,
    lastUpdated: '2024-12-15',
    repository: 'https://github.com/securecoding/security-scanner',
    documentation: 'https://docs.securecoding.com/scanner',
  },
  {
    id: 'git-helper',
    name: 'Git Helper',
    description: 'Assist with Git operations, commit message generation, and workflow automation.',
    author: 'GitTools',
    version: '1.4.1',
    category: 'Utilities',
    tags: ['git', 'version-control', 'automation'],
    downloads: 22150,
    rating: 4.7,
    lastUpdated: '2024-12-07',
    repository: 'https://github.com/gittools/git-helper',
  },
];

export function getPluginById(id: string): Plugin | undefined {
  return plugins.find(plugin => plugin.id === id);
}

export function getPluginsByCategory(category: string): Plugin[] {
  if (category === 'All') {
    return plugins;
  }
  return plugins.filter(plugin => plugin.category === category);
}

export function searchPlugins(query: string): Plugin[] {
  const lowercaseQuery = query.toLowerCase();
  return plugins.filter(plugin =>
    plugin.name.toLowerCase().includes(lowercaseQuery) ||
    plugin.description.toLowerCase().includes(lowercaseQuery) ||
    plugin.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}
