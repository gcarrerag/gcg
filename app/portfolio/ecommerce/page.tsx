import Link from "next/link"
import { ArrowLeft, ArrowRight, ChevronRight, Heart, Search, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function EcommerceLanding() {
  const featuredProducts = [
    {
      id: 1,
      name: "Càmera Digital Pro",
      price: "€599",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=300",
      category: "Electrònica",
    },
    {
      id: 2,
      name: "Auriculars Sense Fil",
      price: "€129",
      rating: 4.5,
      image: "/placeholder.svg?height=300&width=300",
      category: "Àudio",
    },
    {
      id: 3,
      name: "Tauleta Gràfica",
      price: "€249",
      rating: 4.7,
      image: "/placeholder.svg?height=300&width=300",
      category: "Electrònica",
    },
    {
      id: 4,
      name: "Smartwatch Esportiu",
      price: "€179",
      rating: 4.6,
      image: "/placeholder.svg?height=300&width=300",
      category: "Accessoris",
    },
  ]

  const categories = [
    {
      name: "Electrònica",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Roba",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Llar",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Esports",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-emerald-600">TechShop</span>
          </Link>
          <div className="hidden flex-1 items-center justify-center md:flex">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cerca productes..."
                className="w-full rounded-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
              />
            </div>
          </div>
          <nav className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Compte
            </Link>
            <Link href="#" className="relative">
              <Heart className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
                3
              </span>
            </Link>
            <Link href="#" className="relative">
              <ShoppingCart className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
                2
              </span>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-emerald-600 sm:text-5xl xl:text-6xl/none">
                    Descobreix la tecnologia més avançada
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Troba els millors productes tecnològics al millor preu. Enviament gratuït en comandes superiors a
                    €50.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Comprar ara
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Ofertes especials
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-emerald-600 text-emerald-600" />
                    <span>Enviament gratuït</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-emerald-600 text-emerald-600" />
                    <span>Garantia de devolució</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-muted p-4 lg:h-[400px] xl:h-[500px]">
                  <img
                    src="/placeholder.svg?height=500&width=600"
                    alt="Producte destacat"
                    className="mx-auto h-full w-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Categories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explora per categories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Descobreix els nostres productes organitzats per categories per facilitar la teva cerca.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href="#"
                  className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl"
                >
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                    <div className="flex w-full items-center justify-between">
                      <h3 className="text-lg font-bold">{category.name}</h3>
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Productes destacats
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Els més venuts</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Descobreix els productes més populars entre els nostres clients.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden rounded-xl border bg-background p-2 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="absolute right-2 top-2 z-10 rounded-full bg-white p-1 shadow-sm">
                    <Heart className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-emerald-600" />
                  </div>
                  <Link href="#" className="relative block overflow-hidden rounded-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between bg-emerald-600 p-2 text-white transition-transform duration-300 group-hover:translate-y-0">
                      <span className="text-sm font-medium">Afegir al carret</span>
                      <ShoppingCart className="h-4 w-4" />
                    </div>
                  </Link>
                  <div className="p-2">
                    <div className="text-xs text-muted-foreground">{product.category}</div>
                    <h3 className="font-medium">{product.name}</h3>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="font-bold text-emerald-600">{product.price}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Veure tots els productes</Button>
            </div>
          </div>
        </section>
        <section className="w-full bg-emerald-50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                    Subscriu-te
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Rep les nostres ofertes exclusives
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Subscriu-te al nostre butlletí i rep ofertes exclusives, novetats i descomptes especials.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex gap-2">
                    <Input type="email" placeholder="El teu email" className="max-w-lg flex-1" />
                    <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                      Subscriu-te
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground">
                    En subscriure't, acceptes rebre comunicacions de màrqueting.{" "}
                    <Link href="#" className="underline underline-offset-2">
                      Política de privacitat
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Subscripció"
                    className="aspect-video h-full w-full object-cover"
                  />
                </div>
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
            © 2025 TechShop. Tots els drets reservats.
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
