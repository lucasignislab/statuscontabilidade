import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export const metadata: Metadata = {
  title: {
    default: "Status Contabilidade | Contabilidade em Campinas há 22 anos",
    template: "%s | Status Contabilidade",
  },
  description:
    "Escritório de contabilidade em Barão Geraldo, Campinas. Abertura de empresas, fiscal, contábil, folha de pagamento e imposto de renda. Fale com um contador hoje.",
  metadataBase: new URL("https://statuscontab.com.br"),
  openGraph: {
    locale: "pt_BR",
    type: "website",
    siteName: "Status Contabilidade",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Status Contabilidade",
  url: "https://statuscontab.com.br",
  telephone: "+55-19-3289-7123",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Agostinho Páttaro, 180",
    addressLocality: "Campinas",
    addressRegion: "SP",
    postalCode: "13084-643",
    addressCountry: "BR",
  },
  foundingDate: "2004",
  areaServed: ["Campinas", "Barão Geraldo", "Região Metropolitana de Campinas"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
