// app/page.tsx
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Testimonials } from '@/components/testimonials';
import { Pricing } from '@/components/pricing';
import { Contact } from '@/components/contact';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
