// components/Features.tsx
import { CheckCircle } from 'lucide-react';

const features = [
  { title: 'Custom Designs', description: 'Unique, on-brand designs tailored to your business needs.' },
  { title: 'Responsive Layouts', description: 'Mobile-first, fully responsive websites on any device.' },
  { title: 'SEO Optimized', description: 'Grow your online presence with built-in SEO best practices.' },
  { title: 'Fast Performance', description: 'Blazing-fast load times for maximum user engagement.' },
];

export function Features() {
  return (
    <section id="features" className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-primary-light dark:text-primary-dark mt-1" />
              <div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
