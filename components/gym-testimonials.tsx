import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Jessica Martinez',
    role: 'Lost 45 lbs',
    image: '/happy-woman-jessica-smiling-portrait.jpg',
    content: 'APEX completely transformed my life. The trainers are incredibly supportive and the community is amazing. I never thought I could achieve this level of fitness!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Gained 20 lbs muscle',
    image: '/athletic-man-michael-confident-portrait.jpg',
    content: "Best investment I've ever made. The equipment is top-notch and the personal training helped me break through my plateau. Couldn't be happier with my results.",
    rating: 5,
  },
  {
    name: 'Amanda Foster',
    role: 'Marathon Runner',
    image: '/athletic-woman-amanda-runner-portrait.jpg',
    content: 'The structured training programs and expert coaching helped me complete my first marathon. The facilities are world-class and everyone is so encouraging.',
    rating: 5,
  },
]

export default function GymTestimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold tracking-tight sm:text-5xl">
            SUCCESS STORIES
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
            Real transformations from real people who trained at APEX
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6 space-y-4 border-0 bg-card">
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-sm leading-relaxed text-foreground/90">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
