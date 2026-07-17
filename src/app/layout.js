import Script from "next/script";
import ClinicShell from "@/components/ClinicShell";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://eclora.example"),
  title: {
    default: "Eclora Aesthetics Skin & Hair Clinic",
    template: "%s | Eclora Aesthetics Skin & Hair Clinic",
  },
  description:
    "A luxury skin and hair clinic offering advanced dermatology, laser, injectable, and facial treatments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '896681162803562');
              fbq('track', 'PageView');
            `,
          }}
        />
        <Script
          id="ga4"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PESZ2JJB04');
            `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=896681162803562&ev=PageView&noscript=1" />`,
          }}
        />
        <ClinicShell>{children}</ClinicShell>
      </body>
    </html>
  );
}

