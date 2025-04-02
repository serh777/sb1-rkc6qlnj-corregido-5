import { ThemeProvider } from '@/components/theme/theme-provider';
import { NotificationProvider } from '@/components/notifications/notification-system';
import { CookieConsent } from '@/components/cookie-consent';
import { GoogleAnalytics } from '@/components/analytics/google-analytics';
import Script from 'next/script';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="description" content="Herramientas SEO avanzadas para proyectos Web3, optimizando tu presencia en el ecosistema blockchain." />
        <meta name="keywords" content="SEO, Web3, Blockchain, NFT, DeFi, Optimización, Smart Contracts" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://wowseoweb3.com" />
        
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TWG4SXHP');
          `}
        </Script>

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "WowSEOWeb3",
              "url": "https://wowseoweb3.com/",
              "description": "AI-powered SEO tools for Web3 content optimization",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "4.99",
                "priceCurrency": "MATIC"
              }
            })
          }}
        />

        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://polygon-rpc.com" />
        <link rel="preconnect" href="https://explorer-api.walletconnect.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://auth.particle.network" />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWG4SXHP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NotificationProvider>
            <GoogleAnalytics />
            {children}
            <CookieConsent />
          </NotificationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}