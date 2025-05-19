// app/page.tsx
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Testimonials } from '@/components/testimonials';
import { Services } from '@/components/services';
import { Contact } from '@/components/contact';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Contact />
      <Testimonials />
      <Footer />
    </>
  );
}
