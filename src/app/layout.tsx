import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { QueryContext } from './contexts/QueryContext';

const seoDescription =
  'John Lloyd Serrano is a web developer focused on creating reliable, practical, and efficient digital solutions. He brings hands-on experience, strong collaboration skills, and a commitment to delivering high-quality results.';

export const metadata: Metadata = {
  title: 'John Lloyd Serrano – Web Developer',
  description: seoDescription,
  authors: [{ name: 'John Lloyd Serrano' }],
  metadataBase: new URL('https://johnlloydserrano.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'John Lloyd Serrano – Web Developer',
    description: seoDescription,
    url: 'https://johnlloydserrano.com',
    type: 'website',
    images: [
      {
        url: 'https://cloudfront.johnlloydserrano.com/public/images/static/serrano-meta.png',
        width: 1200,
        height: 630,
        alt: 'John Lloyd Serrano – Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Lloyd Serrano – Web Developer',
    description: seoDescription,
    images: [
      'https://cloudfront.johnlloydserrano.com/public/images/static/serrano-meta.png',
    ],
  },
  icons: {
    icon: 'https://cloudfront.johnlloydserrano.com/public/images/static/serrano.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  
  const personData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'John Lloyd Serrano',
    url: 'https://johnlloydserrano.com',
    image:
      'https://cloudfront.johnlloydserrano.com/public/images/static/serrano-meta.png',
    jobTitle: 'Web Developer',
    description: seoDescription,
    sameAs: [
      'https://www.linkedin.com/in/johnlloydserrano',
      'https://github.com/jl-serrano',
    ],
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://johnlloydserrano.com',
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personData, breadcrumbData], null, 2),
          }}
        />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WQX4319GHS"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WQX4319GHS');
          `}
        </Script>
      </head>

      <body>
        <QueryContext>{children}</QueryContext>
      </body>
    </html>
  );
}
