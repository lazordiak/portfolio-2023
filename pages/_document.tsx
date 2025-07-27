import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Adobe Typekit fonts */}
        <link rel="stylesheet" href="https://use.typekit.net/pke4uus.css" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Schuyler deVos",
              "jobTitle": "Creative Technologist & Web Developer",
              "description": "Creative technologist and web developer specializing in VR/AR experiences, interactive installations, and digital art",
              "url": "https://schuylerdevos.com",
              "image": "/sky1.jpg",
              "sameAs": [],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "addressCountry": "US"
              },
              "knowsAbout": [
                "Web Development",
                "Virtual Reality",
                "Augmented Reality", 
                "Interactive Installations",
                "Digital Art",
                "Creative Coding",
                "React",
                "Next.js",
                "Unity",
                "Unreal Engine"
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
