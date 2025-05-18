// components/Testimonials.tsx
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Founder, Acme Corp',
    feedback:
      'Pixelate Solutions transformed our online presence. The site is stunning and performance is top-notch.',
    avatar: '/images/testimonial1.jpg',
  },
  {
    name: 'John Smith',
    role: 'CEO, Startupify',
    feedback: 'Professional, attentive, and creative. Highly recommend their services!',
    avatar: '/images/testimonial2.jpg',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar>
                <AvatarImage src={t.avatar} alt={t.name} />
              </Avatar>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">"{t.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
