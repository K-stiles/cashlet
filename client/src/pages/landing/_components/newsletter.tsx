import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/60 to-primary/80 p-8 shadow-2xl lg:p-16">
        <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
      backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
    }}
  />

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
            Keep up with the latest
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Stay informed about new features, updates, and special offers
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="rounded-lg bg-white px-6 py-4 text-gray-900 placeholder-gray-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-white sm:min-w-[320px]"
            />
            <Button className="flex items-center justify-center gap-2 rounded-lg  px-8 py-4 font-medium shadow-lg transition">
              <span>Try it Free</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-orange-600/30 blur-3xl"></div>
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-32 w-32 rounded-full bg-blue-400/20 blur-2xl"></div>
      </div>
    </section>
  )
}


