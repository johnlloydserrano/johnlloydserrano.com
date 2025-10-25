import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { QueryContext } from './contexts/QueryContext';

export const metadata: Metadata = {
  title: 'John Lloyd Serrano',
  description:
    'John Lloyd Serrano is a dedicated web developer with a foundation built on professional growth and hands-on experience. He contributes to collaborative projects, helping deliver practical and reliable solutions that support both team goals and client needs.',
  authors: [{ name: 'John Lloyd Serrano' }],
  openGraph: {
    title: 'John Lloyd Serrano',
    description:
      'John Lloyd Serrano is a dedicated web developer with a foundation built on professional growth and hands-on experience. He contributes to collaborative projects, helping deliver practical and reliable solutions that support both team goals and client needs.',
    url: 'https://johnlloydserrano.com',
    type: 'website',
    images: [
      {
        url: 'https://cloudfront.johnlloydserrano.com/public/images/static/serrano-meta.png',
        width: 1200,
        height: 630,
        alt: 'John Lloyd Serrano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Lloyd Serrano',
    description:
      'John Lloyd Serrano is a dedicated web developer with a foundation built on professional growth and hands-on experience.',
    images: [
      'https://cloudfront.johnlloydserrano.com/public/images/static/serrano-meta.png',
    ],
  },
  icons: {
    icon: 'https://cloudfront.johnlloydserrano.com/public/images/static/serrano.png',
  },
  metadataBase: new URL('https://johnlloydserrano.com'),
  alternates: {
    canonical: '/',
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
    description:
      'John Lloyd Serrano is a dedicated web developer with a foundation built on professional growth and hands-on experience. He contributes to collaborative projects, helping deliver practical and reliable solutions that support both team goals and client needs.',
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
