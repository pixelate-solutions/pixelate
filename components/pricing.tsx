// components/Pricing.tsx
import { CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Basic',
    price: '$999',
    features: ['Custom Design', 'Responsive Layout', 'SEO Setup'],
  },
  {
    name: 'Pro',
    price: '$1,999',
    features: ['Everything in Basic', 'Performance Optimizations', 'Analytics Integration'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Everything in Pro', 'Dedicated Support', 'Custom Integrations'],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className="text-4xl font-bold my-4">{plan.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Choose {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
