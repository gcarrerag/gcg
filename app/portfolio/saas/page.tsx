import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, Laptop, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ModernSaasLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">SaaSPro</span>
          </Link>
          <nav className="hidden space-x-6 text-sm font-medium md:flex">
            <Link href="#features" className="transition-colors hover:text-foreground/80">
              Funcionalitats
            </Link>
            <Link href="#pricing" className="transition-colors hover:text-foreground/80">
              Preus
            </Link>
            <Link href="#testimonials" className="transition-colors hover:text-foreground/80">
              Testimonis
            </Link>
            <Link href="#faq" className="transition-colors hover:text-foreground/80">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-sm font-medium underline-offset-4 hover:underline">
              Iniciar sessió
            </Link>
            <Button>Prova gratuïta</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                  Nova versió disponible
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Simplifica la gestió del teu negoci amb SaaSPro
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  La plataforma tot-en-un que necessites per gestionar clients, projectes i facturació de manera
                  eficient.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Comença ara
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Demostració
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Prova gratuïta de 14 dies</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Sense targeta de crèdit</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-blue-50 p-4 lg:h-[400px] xl:h-[500px]">
                  <img
                    src="/placeholder.svg?height=500&width=600"
                    alt="Dashboard Preview"
                    className="mx-auto h-full w-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                  Funcionalitats
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Tot el que necessites en un sol lloc
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">
                  SaaSPro ofereix totes les eines necessàries per gestionar el teu negoci de manera eficient.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-blue-100 p-3">
                  <Laptop className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Gestió de projectes</h3>
                <p className="text-center text-gray-500">
                  Organitza i segueix tots els teus projectes en un sol lloc amb facilitat.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-blue-100 p-3">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Automatització</h3>
                <p className="text-center text-gray-500">
                  Automatitza tasques repetitives i estalvia temps amb els nostres fluxos de treball.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-blue-100 p-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Seguretat avançada</h3>
                <p className="text-center text-gray-500">
                  Protegeix les teves dades amb la nostra seguretat d'última generació.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Preus</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Plans senzills i transparents</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">
                  Escull el pla que millor s'adapti a les necessitats del teu negoci.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Bàsic</h3>
                  <p className="text-gray-500">Per a petits negocis i freelancers</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">€29</span>
                  <span className="ml-1 text-gray-500">/mes</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Fins a 5 projectes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Fins a 10 clients</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Facturació bàsica</span>
                  </li>
                </ul>
                <Button className="mt-8">Comença ara</Button>
              </div>
              <div className="flex flex-col rounded-lg border border-blue-600 bg-blue-50 p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs text-white">Popular</div>
                  <h3 className="text-2xl font-bold">Professional</h3>
                  <p className="text-gray-500">Per a negocis en creixement</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">€79</span>
                  <span className="ml-1 text-gray-500">/mes</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Projectes il·limitats</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Fins a 50 clients</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Facturació avançada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Automatitzacions</span>
                  </li>
                </ul>
                <Button className="mt-8 bg-blue-600 hover:bg-blue-700">Comença ara</Button>
              </div>
              <div className="flex flex-col rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Empresa</h3>
                  <p className="text-gray-500">Per a grans empreses</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">€199</span>
                  <span className="ml-1 text-gray-500">/mes</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Tot inclòs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Clients il·limitats</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                    <span>API dedicada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Suport prioritari</span>
                  </li>
                </ul>
                <Button className="mt-8">Contacta'ns</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="fixed bottom-4 left-4">
        <Link href="/">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Tornar a la galeria
          </Button>
        </Link>
      </div>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 SaaSPro. Tots els drets reservats.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Política de privacitat
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Termes d'ús
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

