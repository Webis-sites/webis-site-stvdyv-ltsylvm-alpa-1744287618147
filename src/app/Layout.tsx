// app/layout.tsx
import type { Metadata } from 'next';
import { Heebo, Rubik } from 'next/font/google';
import './globals.css';

// Define fonts
const heebo = Heebo({
  subsets: ['hebrew'],
  display: 'swap',
  variable: '--font-heebo',
});

const rubik = Rubik({
  subsets: ['hebrew'],
  display: 'swap',
  variable: '--font-rubik',
});

// Define metadata
export const metadata: Metadata = {
  title: 'סטודיו לצילום אלפא',
  description: 'סטודיו לצילום מוביל המספק שירות מקצועי ואיכותי. הזמינו תור עוד היום!',
  keywords: 'סטודיו לצילום, שירות, איכות, מקצועיות, ישראל',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://alpha-photo-studio.com',
    title: 'סטודיו לצילום אלפא',
    description: 'סטודיו לצילום מוביל המספק שירות מקצועי ואיכותי. הזמינו תור עוד היום!',
    siteName: 'סטודיו לצילום אלפא',
    images: [
      {
        url: 'https://alpha-photo-studio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'סטודיו לצילום אלפא',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'סטודיו לצילום אלפא',
    description: 'סטודיו לצילום מוביל המספק שירות מקצועי ואיכותי. הזמינו תור עוד היום!',
    images: ['https://alpha-photo-studio.com/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${rubik.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'סטודיו לצילום אלפא',
              image: 'https://alpha-photo-studio.com/logo.jpg',
              '@id': 'https://alpha-photo-studio.com',
              url: 'https://alpha-photo-studio.com',
              telephone: '+972-123-456-789',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'רחוב הצלמים 123',
                addressLocality: 'תל אביב',
                postalCode: '6100000',
                addressCountry: 'IL',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 32.0853,
                longitude: 34.7818,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                  ],
                  opens: '09:00',
                  closes: '18:00',
                },
              ],
              sameAs: [
                'https://www.facebook.com/alphaphotostudio',
                'https://www.instagram.com/alphaphotostudio',
              ],
            }),
          }}
        />
      </head>
      <body className="font-heebo bg-soft-bg text-primary min-h-screen">
        <div className="glass-container">
          {children}
        </div>
      </body>
    </html>
  );
}