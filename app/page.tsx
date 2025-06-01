// app/page.tsx
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
