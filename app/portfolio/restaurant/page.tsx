import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function RestaurantLanding() {
  return (
    <div className="flex min-h-screen flex-col bg-amber-50">
      <header className="sticky top-0 z-50 w-full border-b bg-amber-50/95 backdrop-blur supports-[backdrop-filter]:bg-amber-50/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-serif text-xl font-bold text-amber-900">La Taverna</span>
          </Link>
          <nav className="hidden space-x-6 text-sm font-medium md:flex">
            <Link href="#menu" className="text-amber-900 transition-colors hover:text-amber-700">
              Menú
            </Link>
            <Link href="#about" className="text-amber-900 transition-colors hover:text-amber-700">
              Sobre Nosaltres
            </Link>
            <Link href="#gallery" className="text-amber-900 transition-colors hover:text-amber-700">
              Galeria
            </Link>
            <Link href="#contact" className="text-amber-900 transition-colors hover:text-amber-700">
              Contacte
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="bg-amber-800 text-amber-50 hover:bg-amber-900">Reserva Taula</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="absolute inset-0 z-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center bg-no-repeat opacity-20"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="font-serif text-3xl font-bold tracking-tighter text-amber-900 sm:text-5xl xl:text-6xl/none">
                  Una experiència gastronòmica inoblidable
                </h1>
                <p className="mx-auto max-w-[700px] text-amber-800 md:text-xl">
                  Descobreix els sabors més autèntics de la cuina mediterrània en un ambient elegant i acollidor.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-amber-800 text-amber-50 hover:bg-amber-900">
                  Reserva ara
                </Button>
                <Button size="lg" variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-100">
                  Veure menú
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-amber-200 px-3 py-1 text-sm text-amber-800">
                    La nostra història
                  </div>
                  <h2 className="font-serif text-3xl font-bold tracking-tighter text-amber-900 sm:text-4xl">
                    Tradició i innovació des de 1985
                  </h2>
                  <p className="max-w-[600px] text-amber-800 md:text-xl">
                    La Taverna va néixer de la passió per la gastronomia mediterrània i el desig de crear un espai on
                    els clients poguessin gaudir d'una experiència culinària excepcional.
                  </p>
                  <p className="max-w-[600px] text-amber-800">
                    El nostre xef, amb més de 30 anys d'experiència, selecciona personalment els ingredients més frescos
                    del mercat per crear plats que combinen la tradició amb tocs d'innovació.
                  </p>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-amber-800" />
                    <span className="text-amber-800">Obert de dimarts a diumenge</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="Interior del restaurant"
                    className="aspect-video h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="menu" className="w-full bg-amber-100 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-200 px-3 py-1 text-sm text-amber-800">
                  El nostre menú
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tighter text-amber-900 sm:text-4xl">
                  Sabors mediterranis
                </h2>
                <p className="mx-auto max-w-[700px] text-amber-800 md:text-xl">
                  Una selecció dels nostres plats més emblemàtics, elaborats amb ingredients frescos i de proximitat.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-amber-900">Entrants</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-amber-900">Carpaccio de vedella amb parmesà</h4>
                      <div className="font-medium text-amber-900">€14</div>
                    </div>
                    <p className="text-amber-700">Vedella, parmesà, rúcula, oli d'oliva verge extra</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-amber-900">Burrata amb tomàquet</h4>
                      <div className="font-medium text-amber-900">€12</div>
                    </div>
                    <p className="text-amber-700">Burrata fresca, tomàquet, alfàbrega, oli d'oliva</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-amber-900">Croquetes casolanes</h4>
                      <div className="font-medium text-amber-900">€10</div>
                    </div>
                    <p className="text-amber-700">Pernil ibèric, bolets, bacallà (6 unitats)</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-amber-900">Plats principals</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-amber-900">Risotto de bolets</h4>
                      <div className="font-medium text-amber-900">€18</div>
                    </div>
                    <p className="text-amber-700">Arròs carnaroli, bolets silvestres, parmesà, mantega</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-amber-900">Filet de vedella amb salsa de vi negre</h4>
                      <div className="font-medium text-amber-900">€24</div>
                    </div>
                    <p className="text-amber-700">Filet de vedella, reducció de vi negre, puré de patata</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-amber-900">Lluç a la planxa amb verdures</h4>
                      <div className="font-medium text-amber-900">€20</div>
                    </div>
                    <p className="text-amber-700">Lluç fresc, verdures de temporada, oli d'all i julivert</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-amber-800 text-amber-50 hover:bg-amber-900">Veure menú complet</Button>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-amber-200 px-3 py-1 text-sm text-amber-800">Contacte</div>
                  <h2 className="font-serif text-3xl font-bold tracking-tighter text-amber-900 sm:text-4xl">
                    Reserva la teva taula
                  </h2>
                  <p className="max-w-[600px] text-amber-800 md:text-xl">
                    Et recomanem reservar amb antelació per garantir la disponibilitat.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-amber-800" />
                    <span className="text-amber-800">+34 93 123 45 67</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-amber-800" />
                    <span className="text-amber-800">Carrer Major, 123, Barcelona</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-amber-800" />
                    <span className="text-amber-800">Dimarts a diumenge: 13:00 - 16:00 | 20:00 - 23:30</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md space-y-4 rounded-xl bg-white p-6 shadow-md">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-amber-900">Formulari de reserva</h3>
                    <p className="text-amber-700">Omple el formulari i et contactarem per confirmar la teva reserva.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-amber-900">
                          Nom
                        </label>
                        <input
                          id="name"
                          className="w-full rounded-md border border-amber-300 bg-transparent px-3 py-2 text-sm placeholder:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="El teu nom"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-amber-900">
                          Telèfon
                        </label>
                        <input
                          id="phone"
                          className="w-full rounded-md border border-amber-300 bg-transparent px-3 py-2 text-sm placeholder:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="El teu telèfon"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="date" className="text-sm font-medium text-amber-900">
                          Data
                        </label>
                        <input
                          id="date"
                          type="date"
                          className="w-full rounded-md border border-amber-300 bg-transparent px-3 py-2 text-sm placeholder:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="time" className="text-sm font-medium text-amber-900">
                          Hora
                        </label>
                        <input
                          id="time"
                          type="time"
                          className="w-full rounded-md border border-amber-300 bg-transparent px-3 py-2 text-sm placeholder:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="guests" className="text-sm font-medium text-amber-900">
                        Nombre de comensals
                      </label>
                      <input
                        id="guests"
                        type="number"
                        min="1"
                        className="w-full rounded-md border border-amber-300 bg-transparent px-3 py-2 text-sm placeholder:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Nombre de persones"
                      />
                    </div>
                    <Button className="w-full bg-amber-800 text-amber-50 hover:bg-amber-900">Enviar reserva</Button>
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
            className="flex items-center gap-1 border-amber-800 text-amber-800 hover:bg-amber-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Tornar a la galeria
          </Button>
        </Link>
      </div>
      <footer className="border-t border-amber-200 bg-amber-50 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-amber-800 md:text-left">
            © 2025 La Taverna. Tots els drets reservats.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-amber-800 underline-offset-4 hover:underline">
              Política de privacitat
            </Link>
            <Link href="#" className="text-sm text-amber-800 underline-offset-4 hover:underline">
              Termes d'ús
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
