import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Process from "@/components/process"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <main className="overflow-hidden text-white p-10">
      {<Hero /> }
      {<Services />}
      {<Portfolio />}
      {<Process />}
      {<Testimonials />}
      {<CTA />}
      {<Contact />}
    </main>
  )
}

