import Header from '@/components/gym-header'
import Hero from '@/components/gym-hero'
import Programs from '@/components/gym-programs'
import Trainers from '@/components/gym-trainers'
import Pricing from '@/components/gym-pricing'
import Testimonials from '@/components/gym-testimonials'
import CTA from '@/components/gym-cta'
import Footer from '@/components/gym-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Programs />
      <Trainers />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
