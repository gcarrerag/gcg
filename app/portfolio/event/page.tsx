import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin, Star, Users, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function EventLanding() {
  const speakers = [
    {
      name: "Anna Martí",
      role: "CEO & Fundadora",
      company: "TechInnovate",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Marc Puig",
      role: "Director de Màrqueting",
      company: "Global Brands",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Laura Vidal",
      role: "Experta en IA",
      company: "Future Labs",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Jordi Ferrer",
      role: "Inversor",
      company: "Capital Ventures",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const schedule = [
    {
      time: "09:00 - 10:00",
      title: "Registre i benvinguda",
      description: "Recollida d'acreditacions i cafè de benvinguda",
    },
    {
      time: "10:00 - 11:30",
      title: "Conferència inaugural",
      description: "El futur de la tecnologia i la innovació",
      speaker: "Anna Martí",
    },
    {
      time: "11:30 - 12:00",
      title: "Pausa cafè",
      description: "Networking i refrigeri",
    },
    {
      time: "12:00 - 13:30",
      title: "Taula rodona",
      description: "Tendències en màrqueting digital per al 2025",
      speaker: "Marc Puig i altres experts",
    },
    {
      time: "13:30 - 15:00",
      title: "Dinar",
      description: "Bufet i networking",
    },
    {
      time: "15:00 - 16:30",
      title: "Workshops paral·lels",
      description: "Sessions pràctiques en grups reduïts",
      speaker: "Diversos experts",
    },
    {
      time: "16:30 - 17:30",
      title: "Conferència de clausura",
      description: "El paper de la IA en la transformació empresarial",
      speaker: "Laura Vidal",
    },
    {
      time: "17:30 - 19:00",
      title: "Còctel de cloenda",
      description: "Networking i celebració",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-orange-50">
      <header className="sticky top-0 z-50 w-full border-b bg-orange-50/95 backdrop-blur supports-[backdrop-filter]:bg-orange-50/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-orange-600">TechSummit 2025</span>
          </Link>
          <nav className="hidden space-x-6 text-sm font-medium md:flex">
            <Link href="#about" className="text-orange-900 transition-colors hover:text-orange-600">
              Sobre l'esdeveniment
            </Link>
            <Link href="#speakers" className="text-orange-900 transition-colors hover:text-orange-600">
              Ponents
            </Link>
            <Link href="#schedule" className="text-orange-900 transition-colors hover:text-orange-600">
              Programa
            </Link>
            <Link href="#register" className="text-orange-900 transition-colors hover:text-orange-600">
              Inscripció
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="bg-orange-600 text-white hover:bg-orange-700">Reserva la teva entrada</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="absolute inset-0 z-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center bg-no-repeat opacity-20"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-orange-600 bg-orange-100 px-3 py-1 text-sm text-orange-700">
                  <Calendar className="mr-1 h-3.5 w-3.5" />
                  <span>15-16 de Maig, 2025</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter text-orange-900 sm:text-5xl xl:text-6xl/none">
                  TechSummit 2025
                </h1>
                <p className="mx-auto max-w-[700px] text-orange-800 md:text-xl">
                  L'esdeveniment de referència sobre tecnologia, innovació i transformació digital a Barcelona.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-700">
                  Reserva la teva entrada
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-100">
                  Veure programa
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4 text-orange-600" />
                  <span className="text-orange-800">15-16 de Maig, 2025</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span className="text-orange-800">Fira de Barcelona, Montjuïc</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-orange-600" />
                  <span className="text-orange-800">+2000 assistents</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600">
                    Sobre l'esdeveniment
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter text-orange-900 sm:text-4xl">
                    El punt de trobada de la innovació
                  </h2>
                  <p className="max-w-[600px] text-orange-800 md:text-xl">
                    TechSummit 2025 reuneix els principals líders i experts en tecnologia i innovació per compartir
                    coneixements, tendències i casos d'èxit.
                  </p>
                  <p className="max-w-[600px] text-orange-800">
                    Durant dos dies intensos, podràs assistir a conferències inspiradores, participar en workshops
                    pràctics i establir contactes valiosos amb professionals del sector.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <div className="flex items-center space-x-2 rounded-lg bg-orange-100 px-3 py-2">
                    <Star className="h-5 w-5 text-orange-600" />
                    <span className="text-orange-800">+50 ponents experts</span>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg bg-orange-100 px-3 py-2">
                    <Star className="h-5 w-5 text-orange-600" />
                    <span className="text-orange-800">+30 sessions i workshops</span>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg bg-orange-100 px-3 py-2">
                    <Star className="h-5 w-5 text-orange-600" />
                    <span className="text-orange-800">Networking de qualitat</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="Edició anterior del TechSummit"
                    className="aspect-video h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="speakers" className="w-full bg-orange-100 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-200 px-3 py-1 text-sm text-orange-600">
                  Ponents destacats
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-orange-900 sm:text-4xl">
                  Experts de primer nivell
                </h2>
                <p className="mx-auto max-w-[700px] text-orange-800 md:text-xl">
                  Coneix els professionals que compartiran el seu coneixement i experiència durant l'esdeveniment.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {speakers.map((speaker, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 rounded-xl bg-white p-6 shadow-sm">
                  <div className="overflow-hidden rounded-full">
                    <img
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      className="aspect-square h-32 w-32 object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <h3 className="text-xl font-bold text-orange-900">{speaker.name}</h3>
                    <p className="text-orange-600">{speaker.role}</p>
                    <p className="text-orange-800">{speaker.company}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-orange-600 text-white hover:bg-orange-700">Veure tots els ponents</Button>
            </div>
          </div>
        </section>
        <section id="schedule" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600">Programa</div>
                <h2 className="text-3xl font-bold tracking-tighter text-orange-900 sm:text-4xl">
                  Agenda del primer dia
                </h2>
                <p className="mx-auto max-w-[700px] text-orange-800 md:text-xl">
                  Un programa complet amb conferències, taules rodones i workshops per a tots els perfils professionals.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-16 max-w-3xl space-y-6">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-2 rounded-xl border border-orange-200 bg-white p-6 shadow-sm md:flex-row md:items-start md:space-x-6 md:space-y-0"
                >
                  <div className="flex-shrink-0 text-orange-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span className="font-medium">{item.time}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-orange-900">{item.title}</h3>
                    <p className="text-orange-800">{item.description}</p>
                    {item.speaker && (
                      <p className="text-sm text-orange-600">
                        <span className="font-medium">Ponent:</span> {item.speaker}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-orange-600 text-white hover:bg-orange-700">Descarregar programa complet</Button>
            </div>
          </div>
        </section>
        <section id="register" className="w-full bg-orange-100 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-orange-200 px-3 py-1 text-sm text-orange-600">
                    Inscripció
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter text-orange-900 sm:text-4xl">
                    Reserva la teva plaça
                  </h2>
                  <p className="max-w-[600px] text-orange-800 md:text-xl">
                    No et perdis l'oportunitat de formar part d'aquest esdeveniment únic. Les places són limitades!
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                    <span className="text-orange-800">Accés a totes les conferències</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                    <span className="text-orange-800">Materials i documentació</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                    <span className="text-orange-800">Càtering inclòs (esmorzar i dinar)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                    <span className="text-orange-800">Certificat d'assistència</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                    <span className="text-orange-800">Accés a la gravació de les sessions</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md space-y-4 rounded-xl bg-white p-6 shadow-md">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-orange-900">Formulari d'inscripció</h3>
                    <p className="text-orange-800">Omple el formulari i rebràs la confirmació per email.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-orange-900">
                          Nom
                        </label>
                        <Input
                          id="name"
                          className="w-full rounded-md border border-orange-200 bg-transparent px-3 py-2 text-sm placeholder:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="El teu nom"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="surname" className="text-sm font-medium text-orange-900">
                          Cognoms
                        </label>
                        <Input
                          id="surname"
                          className="w-full rounded-md border border-orange-200 bg-transparent px-3 py-2 text-sm placeholder:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Els teus cognoms"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-orange-900">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-orange-200 bg-transparent px-3 py-2 text-sm placeholder:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="El teu email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-orange-900">
                        Empresa
                      </label>
                      <Input
                        id="company"
                        className="w-full rounded-md border border-orange-200 bg-transparent px-3 py-2 text-sm placeholder:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="La teva empresa"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="ticket" className="text-sm font-medium text-orange-900">
                        Tipus d'entrada
                      </label>
                      <select
                        id="ticket"
                        className="w-full rounded-md border border-orange-200 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="standard">Entrada Estàndard (€299)</option>
                        <option value="premium">Entrada Premium (€499)</option>
                        <option value="vip">Entrada VIP (€799)</option>
                      </select>
                    </div>
                    <Button className="w-full bg-orange-600 text-white hover:bg-orange-700">Reservar entrada</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="fixed bottom-4 left-4">
        <Link href="/">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1 border-orange-600 text-orange-600 hover:bg-orange-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Tornar a la galeria
          </Button>
        </Link>
      </div>
      <footer className="border-t border-orange-200 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-orange-800 md:text-left">
            © 2025 TechSummit. Tots els drets reservats.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-orange-800 underline-offset-4 hover:text-orange-600 hover:underline">
              Política de privacitat
            </Link>
            <Link href="#" className="text-sm text-orange-800 underline-offset-4 hover:text-orange-600 hover:underline">
              Termes d'ús
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
