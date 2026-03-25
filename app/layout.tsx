import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import CartDrawer from './components/CartDrawer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Khan Sohaib',
  description: 'Discover Khan Sohaib, a century-old house of haute parfumerie. Explore our collection of timeless fragrances crafted from the world\'s rarest ingredients.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <CartProvider>
            {children}
            <CartDrawer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
