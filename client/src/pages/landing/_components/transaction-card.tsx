import {  buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import dashboardImage from "../../../assets/images/dashboard_.png"
import { Link } from 'react-router-dom'

export default function TransactionCard() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <div className="mb-4 text-sm font-semibold text-primary">Smart Finance</div>
          <h2 className="mb-4 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            Take control of your financial future with AI
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Cashlet combines powerful AI insights with intuitive tools to help you track expenses, budget smarter, and make informed financial decisions. Experience personalized financial guidance that adapts to your unique spending patterns.
          </p>
          <Link to="/overview" className={cn(buttonVariants({variant:"default"}),"flex w-fit items-center gap-2 rounded-lg px-8 py-4 transition")}>
            <span className="font-medium">Get Started For Free</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="order-1 lg:order-2">
         <img
              src={dashboardImage}
              alt="Dashboard Image"
              className={cn(
                "w-full rounded-xl object-cover shadow-xl",
                "ring-8 ring-primary/30"
              )}
            />
        </div>
      </div>
    </section>
  )
}
