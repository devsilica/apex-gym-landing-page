import { Card } from '@/components/ui/card'
import { Flame, Heart, Zap, Target, Users, Bike } from 'lucide-react'

const programs = [
  {
    icon: Flame,
    title: 'Strength Training',
    description: 'Build muscle and power with our comprehensive strength programs designed for all levels.',
    image: '/person-doing-strength-training-deadlift-in-gym.jpg',
  },
  {
    icon: Zap,
    title: 'HIIT Classes',
    description: 'High-intensity interval training to maximize fat burn and boost your metabolism.',
    image: '/group-hiit-training-class-high-energy.jpg',
  },
  {
    icon: Heart,
    title: 'Cardio Zone',
    description: 'State-of-the-art cardio equipment and expert-led classes for optimal heart health.',
    image: '/modern-cardio-equipment-treadmills-in-gym.jpg',
  },
  {
    icon: Target,
    title: 'Personal Training',
    description: 'One-on-one coaching tailored to your goals with certified fitness professionals.',
    image: '/personal-trainer-client.png',
  },
  {
    icon: Users,
    title: 'Group Fitness',
    description: 'Energizing group classes from yoga to boxing. Find your tribe and stay motivated.',
    image: '/group-fitness-class-people-exercising-together.jpg',
  },
  {
    icon: Bike,
    title: 'Cycling Studio',
    description: 'Premium indoor cycling with immersive experiences and expert instructors.',
    image: '/indoor-cycling-studio-with-bikes.jpg',
  },
]

export default function GymPrograms() {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold tracking-tight sm:text-5xl">
            OUR PROGRAMS
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
            Choose from a wide variety of programs designed to help you achieve your fitness goals
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <Card
                key={program.title}
                className="group relative overflow-hidden border-0 bg-card transition-all hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-[family-name:var(--font-oswald)] text-xl font-semibold">
                    {program.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
