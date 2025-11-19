import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: 29,
    period: 'month',
    description: 'Perfect for getting started',
    features: [
      'Access to gym floor',
      'Cardio equipment',
      'Locker room access',
      'Mobile app access',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: 59,
    period: 'month',
    description: 'Most popular choice',
    features: [
      'Everything in Basic',
      'Unlimited group classes',
      'Personal training session (1/month)',
      'Nutrition consultation',
      'Guest passes (2/month)',
      'Towel service',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: 99,
    period: 'month',
    description: 'Ultimate fitness experience',
    features: [
      'Everything in Pro',
      'Unlimited personal training',
      'Priority class booking',
      'Massage therapy (2/month)',
      'Meal planning service',
      'Private locker',
      '24/7 VIP access',
    ],
    popular: false,
  },
]

export default function GymPricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold tracking-tight sm:text-5xl">
            MEMBERSHIP PLANS
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
            Choose the perfect plan to match your fitness goals and lifestyle
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden border-2 p-8 ${
                plan.popular
                  ? 'border-accent shadow-xl scale-105'
                  : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-xs font-semibold tracking-wide">
                  MOST POPULAR
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold font-[family-name:var(--font-oswald)]">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          All plans include a 7-day money-back guarantee. No contracts, cancel anytime.
        </p>
      </div>
    </section>
  )
}
