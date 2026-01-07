import type { Metadata } from "next";
import { Onest, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saasideas.com"),
  title: {
    default: "SaasIdeas | Profitable Business Ideas & Founder Stories 2026",
    template: "%s | SaasIdeas",
  },
  description: "Discover profitable SaaS ideas, side hustle opportunities, and micro SaaS concepts from real founder interviews. Learn startup strategies, tech stacks, and growth playbooks from successful indie hackers and entrepreneurs.",
  keywords: [
    "SaaS ideas 2026",
    "micro SaaS ideas",
    "side hustle ideas",
    "profitable business ideas",
    "startup ideas",
    "indie hacker",
    "founder stories",
    "entrepreneur interviews",
    "online business ideas",
    "passive income ideas",
    "solopreneur",
    "bootstrapped startups",
    "tech startup ideas",
    "AI business ideas",
    "digital products",
    "make money online",
  ],
  authors: [{ name: "Priyanka", url: "https://x.com/priyankapudi" }],
  creator: "Priyanka",
  publisher: "SaasIdeas",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/doodleColored.png",
    shortcut: "/doodleColored.png",
    apple: "/doodleColored.png",
  },
  openGraph: {
    title: "SaasIdeas | Profitable Business Ideas & Founder Stories 2026",
    description: "Discover profitable SaaS ideas, side hustle opportunities, and micro SaaS concepts from real founder interviews. Learn startup strategies and growth playbooks.",
    url: "https://saasideas.com",
    siteName: "SaasIdeas",
    images: [
      {
        url: "/open graph.png",
        width: 1200,
        height: 630,
        alt: "SaasIdeas - Profitable Business Ideas & Founder Stories",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaasIdeas | Profitable Business Ideas & Founder Stories 2026",
    description: "Discover profitable SaaS ideas, side hustle opportunities, and micro SaaS concepts from real founder interviews.",
    images: ["/open graph.png"],
    creator: "@priyankapudi",
  },
  alternates: {
    canonical: "https://saasideas.com",
  },
  category: "Business",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SaasIdeas",
  description: "Curated summaries from Starter Story founder interviews. Discover profitable business ideas, growth strategies, and tech stacks from successful entrepreneurs.",
  url: "https://saasideas.com",
  author: {
    "@type": "Person",
    name: "Priyanka",
    url: "https://x.com/priyankapudi",
  },
  publisher: {
    "@type": "Organization",
    name: "SaasIdeas",
    logo: {
      "@type": "ImageObject",
      url: "https://saasideas.com/doodleColored.png",
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://saasideas.com/stories?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${onest.variable} ${bricolageGrotesque.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
