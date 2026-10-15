import './globals.css'

export const metadata = {
  title: 'Vignesh Raja — Frontend Developer',
  description: 'Frontend Developer with 3+ years of experience building responsive web apps and immersive 3D, scroll-driven experiences using React, Next.js, Three.js, plus Shopify and Shopware storefront work.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'Three.js', 'Shopify', 'Vignesh Raja'],
  openGraph: {
    title: 'Vignesh Raja — Frontend Developer',
    description: 'Building scalable, high-performance, user-first solutions.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
