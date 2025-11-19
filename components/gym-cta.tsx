import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function GymCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/dynamic-gym-interior-equipment-dramatic-lighting.jpg"
          alt="Gym CTA background"
          className="h-full w-full object-cover brightness-[0.3]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl text-balance">
            YOUR TRANSFORMATION STARTS TODAY
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg text-white/90 text-balance leading-relaxed">
            Join thousands of members who have already transformed their lives. Limited spots available for new members this month.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 h-12 gap-2">
              Claim Your Free Trial
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm text-base px-8 h-12">
              Schedule Tour
            </Button>
          </div>

          <p className="text-sm text-white/60 pt-4">
            7-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
