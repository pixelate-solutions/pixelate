// app/page.tsx
import Head from 'next/head';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Contact } from '@/components/contact';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <>
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
      <Contact />
      <Footer />
    </>
  );
}
