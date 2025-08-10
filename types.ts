
import React from 'react';
import type { IconProps } from './components/icons'; // Import IconProps

export interface ServiceItem {
  id: string;
  title: string;
  description: string; // Concise description for the card
  icon: React.ReactElement<IconProps>;
  path: string; // Path for the link, e.g., '#/services/cfo'
}

export interface ValueFrameworkItem {
  id: string;
  title: string;
  description: string;
}

export interface WorkWithSubItem {
  heading: string;
  points: string[];
}
export interface WorkWithCategory {
  id: string;
  title: string;
  icon: React.ReactElement<IconProps>;
  intro: string;
  subSections: WorkWithSubItem[];
}