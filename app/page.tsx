// app/page.tsx
import { Hero } from '@/components/hero';
import { Gallery } from '@/components/gallery';
// import { Testimonials } from '@/components/testimonials';
import { Services } from '@/components/services';
import { Contact } from '@/components/contact';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <Services />
      <Contact />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}
