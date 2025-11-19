'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

export default function GymHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="/athletic-person-working-out-in-modern-gym-with-dra.jpg"
          alt="Fitness hero"
          className="h-full w-full object-cover brightness-[0.35]"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-32 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm border border-accent/30">
            Limited Time: First Month 50% Off
          </div>
          
          <h1 className="font-[family-name:var(--font-oswald)] text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl text-balance">
            TRANSFORM YOUR BODY, ELEVATE YOUR MIND
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-white/90 sm:text-xl text-balance leading-relaxed">
            Join the elite fitness community where champions are made. World-class trainers, cutting-edge equipment, and results that speak for themselves.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 h-12 gap-2">
              Start Your Journey
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm text-base px-8 h-12 gap-2">
              <Play className="h-5 w-5" />
              Watch Tour
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-white">
            <div className="flex flex-col items-center">
              <div className="font-[family-name:var(--font-oswald)] text-4xl font-bold">15K+</div>
              <div className="text-sm text-white/70">Active Members</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-white/20" />
            <div className="flex flex-col items-center">
              <div className="font-[family-name:var(--font-oswald)] text-4xl font-bold">50+</div>
              <div className="text-sm text-white/70">Expert Trainers</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-white/20" />
            <div className="flex flex-col items-center">
              <div className="font-[family-name:var(--font-oswald)] text-4xl font-bold">24/7</div>
              <div className="text-sm text-white/70">Access</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
