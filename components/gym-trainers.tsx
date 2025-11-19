'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Award, Instagram } from 'lucide-react'

const trainers = [
  {
    name: 'Marcus Chen',
    specialty: 'Strength & Conditioning',
    image: '/professional-fitness-trainer-marcus-male-athletic.jpg',
    certifications: ['NASM-CPT', 'CSCS'],
    instagram: '@marcusfitness',
  },
  {
    name: 'Sarah Williams',
    specialty: 'HIIT & Functional Training',
    image: '/professional-fitness-trainer-sarah-female-athletic.jpg',
    certifications: ['ACE-CPT', 'TRX'],
    instagram: '@sarahtrains',
  },
  {
    name: 'David Rodriguez',
    specialty: 'Bodybuilding & Nutrition',
    image: '/professional-fitness-trainer-david-male-muscular.jpg',
    certifications: ['ISSA', 'Precision Nutrition'],
    instagram: '@davidlifts',
  },
  {
    name: 'Emma Thompson',
    specialty: 'Yoga & Mindfulness',
    image: '/professional-yoga-instructor-emma-female-zen.jpg',
    certifications: ['RYT-500', 'E-RYT'],
    instagram: '@emmaflow',
  },
  {
    name: 'James Mitchell',
    specialty: 'Olympic Lifting',
    image: '/professional-fitness-trainer-james-male-powerlifte.jpg',
    certifications: ['USAW-L1', 'CrossFit-L2'],
    instagram: '@jameslifts',
  },
]

export default function GymTrainers() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTrainer = () => {
    setCurrentIndex((prev) => (prev + 1) % trainers.length)
  }

  const prevTrainer = () => {
    setCurrentIndex((prev) => (prev - 1 + trainers.length) % trainers.length)
  }

  const visibleTrainers = [
    trainers[currentIndex],
    trainers[(currentIndex + 1) % trainers.length],
    trainers[(currentIndex + 2) % trainers.length],
  ]

  return (
    <section id="trainers" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold tracking-tight sm:text-5xl">
            MEET YOUR TRAINERS
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
            Our certified professionals are here to guide you every step of your fitness journey
          </p>
        </div>

        <div className="relative">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleTrainers.map((trainer) => (
              <Card
                key={trainer.name}
                className="overflow-hidden border-0 bg-card group hover:shadow-xl transition-shadow"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold mb-1">
                      {trainer.name}
                    </h3>
                    <p className="text-accent text-sm font-medium mb-3">{trainer.specialty}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-4 w-4" />
                      <div className="text-xs">{trainer.certifications.join(' • ')}</div>
                    </div>
                    <a
                      href={`https://instagram.com/${trainer.instagram.slice(1)}`}
                      className="flex items-center gap-1 text-xs text-white/70 hover:text-accent transition-colors"
                    >
                      <Instagram className="h-3 w-3" />
                      {trainer.instagram}
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTrainer}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTrainer}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
