import 'styles/index.scss';

import { Inter } from 'next/font/google';

import { QueryProvider } from 'context/query';

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
    <body className="app">
      <QueryProvider>{children}</QueryProvider>
    </body>
  </html>
);

export default Layout;
