// app/page.tsx
import Head from 'next/head';
import { Hero } from '@/components/hero';
// import { WebGallery } from '@/components/web-gallery';
// import { Testimonials } from '@/components/testimonials';
import { Services } from '@/components/services';
import { Contact } from '@/components/contact';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Pixelate Solutions – Custom AI & Web Development</title>
        <meta
          name="description"
          content="We help businesses integrate custom AI tools and build sleek, scalable web experiences. Let's build your solution today."
        />
      </Head>
      <Navbar />
      <Hero />
      {/* <WebGallery /> now added to the services page */}
      <Services />
      <Contact />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}
