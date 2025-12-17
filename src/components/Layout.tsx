import { ReactNode } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-r from-blue-400/20 via-blue-600/20 to-blue-400/20"
             style={{
               backgroundSize: '200% 200%',
               animation: 'gradient-shift 15s ease infinite'
             }}>
        </div>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <Navigation />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
