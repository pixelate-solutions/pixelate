// app/page.tsx
import Head from 'next/head';
import Script from 'next/script';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { PortfolioCarousel } from '@/components/portfolio-carousel';
import { Pricing } from '@/components/pricing';
import { Contact } from '@/components/contact';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <>
      <Script id="linkedin-insight-partner" strategy="afterInteractive">
        {`
          _linkedin_partner_id = "8785852";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}
      </Script>
      <Script id="linkedin-insight-loader" strategy="afterInteractive">
        {`
          (function(l) {
            if (!l) {
              window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[];
            }
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src="https://px.ads.linkedin.com/collect/?pid=8785852&fmt=gif"
        />
      </noscript>
      <Head>
        <title>Pixelate Solutions – Full-Stack Product Studio</title>
        <meta
          name="description"
          content="We design, build, and scale modern digital products with full-stack engineering, AI, and cloud expertise."
        />
      </Head>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <PortfolioCarousel />
      <Contact />
      <Footer />
    </>
  );
}
