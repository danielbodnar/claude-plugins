export interface Plugin {
  id: string;
  name: string;
  description: string;
  author: string;
  version: string;
  category: string;
  tags: string[];
  downloads: number;
  rating: number;
  lastUpdated: string;
  repository?: string;
  documentation?: string;
  icon?: string;
}

export type PluginCategory = 
  | 'Code Generation'
  | 'Testing'
  | 'Documentation'
  | 'Debugging'
  | 'Data Processing'
  | 'API Integration'
  | 'Utilities'
  | 'All';
