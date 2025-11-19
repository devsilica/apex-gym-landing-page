import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export default function GymFooter() {
  const footerLinks = {
    Company: ['About Us', 'Our Story', 'Careers', 'Press'],
    Programs: ['Personal Training', 'Group Classes', 'Online Coaching', 'Nutrition'],
    Support: ['FAQ', 'Contact', 'Membership', 'Locations'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  }

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <Dumbbell className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="font-[family-name:var(--font-oswald)] text-2xl">APEX</span>
            </a>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Transform your body and elevate your mind with world-class training and state-of-the-art facilities.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 APEX Fitness. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            📍 123 Fitness Street, Los Angeles, CA 90012
          </p>
        </div>
      </div>
    </footer>
  )
}
