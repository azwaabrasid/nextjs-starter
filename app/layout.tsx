import 'styles/globals.scss';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'NextJS Starter',
  description: 'Welcome to NextJS Starter.',
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <html lang="en" className={`${inter.variable}`}>
    <body className="app">{children}</body>
  </html>
);

export default Layout;
