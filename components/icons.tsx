
import React from 'react';

export interface IconProps { // Export IconProps
  className?: string;
}

export const BriefcaseIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 0 1-2.25 2.25h-12a2.25 2.25 0 0 1-2.25-2.25v-4.073M15.75 9.75h3.75M15.75 9.75v4.5M15.75 9.75L13.5 3.75h-3L8.25 9.75M8.25 9.75h3.75M8.25 9.75v4.5m0-4.5L6 3.75H2.25l1.755 6.75" />
  </svg>
);

export const TrendingUpIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
  </svg>
);

export const HandshakeIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.994 0-3.182-3.182m0 0a3.375 3.375 0 0 0-4.773 0l-3.182 3.182M3 12.75h4.992v-.001M19.015 19.644v-4.992m0 0h-4.993m4.993 0-3.181 3.183a8.25 8.25 0 0 1-11.667 0l-3.181-3.183m4.994 0 3.182-3.182m0 0a3.375 3.375 0 0 1-4.773 0l-3.182 3.182" />
  </svg>
);

export const UserGroupIcon: React.FC<IconProps> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m8.008 0a8.967 8.967 0 0 1-1.087 1.913m-6.836 0a8.967 8.967 0 0 0-1.087-1.913m0 0A5.971 5.971 0 0 1 6 15.547m0 0v2.006m0 0a5.971 5.971 0 0 0 .939 3.197M12 8.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
</svg>
);

export const LightBulbIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.354a11.953 11.953 0 0 1-3.75 0M10.5 6.375c0-1.036.84-1.875 1.875-1.875h.375c1.036 0 1.875.84 1.875 1.875v1.875M10.5 6.375C10.5 5.339 9.661 4.5 8.625 4.5c-1.036 0-1.875.84-1.875 1.875v1.875c0 1.036.84 1.875 1.875 1.875h.375M17.25 6.375c0-1.036.84-1.875 1.875-1.875h.375c1.036 0 1.875.84 1.875 1.875v1.875M17.25 6.375c0-1.036-.84-1.875-1.875-1.875S13.5 5.339 13.5 6.375v1.875c0 1.036.84 1.875 1.875 1.875h.375" />
  </svg>
);

export const ChartBarIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);