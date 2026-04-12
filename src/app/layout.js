import ClinicShell from "@/components/ClinicShell";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://eclora.example"),
  title: {
    default: "Eclora Skin & Hair Clinic",
    template: "%s | Eclora Skin & Hair Clinic",
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
        <ClinicShell>{children}</ClinicShell>
      </body>
    </html>
  );
}
