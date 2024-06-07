"use client"
// app/layout.tsx
import { ThemeProvider } from '@aws-amplify/ui-react';
import './globals.css';
import config from '../aws-exports';
import { Amplify } from 'aws-amplify';

Amplify.configure(config);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
