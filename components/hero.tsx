// components/hero.tsx
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="hero" className="container mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl font-extrabold mb-4">Peace & Purpose, Digitally Delivered</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        At Pixelate Solutions, we bring peace and purpose by helping others thrive through beautiful, performant websites.
      </p>
      <Button size="lg" asChild>
        <a href="#contact">Let's Build Your Website</a>
      </Button>
      <div className="mt-10">
        <Image
          src="/digital-world.jpg"
          alt="Digital peace and purpose graphic"
          width={600}
          height={400}
          className="mx-auto"
        />
      </div>
    </section>
  );
}
