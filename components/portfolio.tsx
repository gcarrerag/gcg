"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function Portfolio() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("todos")
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredProject, setHoveredProject] = useState(null)
  const ref = useRef(null)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1 })
  }, [controls])

  const categories = [
    { id: "todos", label: t("portfolio.filter.all") },
    { id: "ecommerce", label: t("portfolio.filter.ecommerce") },
    { id: "corporativo", label: t("portfolio.filter.corporate") },
    { id: "landing", label: t("portfolio.filter.landing") },
  ]

  const projects = [
    {
      id: 1,
      title: "Tienda Veterinaria Online",
      category: "ecommerce",
      image: "/vet.jpg?height=600&width=800",
      description: "Tienda online completa con catálogo de productos, carrito de compras y pasarela de pago integrada.",
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "Supabase"],
      link: "https://webapp-cvn.vercel.app",
    },
    {
      id: 2,
      title: "Web informativa para estudio de Arquitectura",
      category: "corporativo",
      image: "/laurea.jpg?height=600&width=800",
      description: "Sitio web elegante para un estuido de arquitectura con múltiples páginas..",
      technologies: ["Html", "CSS", "JavaScript"],
      link: "https://laurea.cat",
    },
    {
      id: 3,
      title: "Landing Page Ecomerce",
      category: "landing",
      image: "/ecommerce.jpg?height=600&width=800",
      description:
        "Página de aterrizaje para un software como servicio con animaciones y compra de productos con carrito.",
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "Vercel"],
      link: "/portfolio/ecommerce",
    },
    {
      id: 4,
      title: "Landing Page Event",
      category: "landing",
      image: "/event.jpg?height=600&width=800",
      description:
        "Plataforma que conecta productores locales con consumidores, incluyendo sistema de pedidos y reseñas.",
      technologies: ["Next.js", "TypeScript", "Prisma"],
      link: "/portfolio/event",
    },
    {
      id: 5,
      title: "Landing Page Restaurant",
      category: "landing",
      image: "/restaurant.jpg?height=600&width=800",
      description: "Sitio web profesional para un restaurante con carta, reservar mesa...",
      technologies: ["Next.js", "Styled Components", "Contentful", "Netlify"],
      link: "/portfolio/restaurant",
    },
    {
      id: 6,
      title: "Landing Page Saas",
      category: "landing",
      image: "/saas.jpg?height=600&width=800",
      description: "Página de aterrizaje para promocionar una aplicación móvil con animaciones y enlaces de descarga.",
      technologies: ["Next.js", "GSAP", "Tailwind CSS", "Vercel"],
      link: "/portfolio/saas",
    },
  ]

  const filteredProjects =
    activeTab === "todos" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="portafolio" className="py-20 md:py-32 bg-white dark:bg-black relative overflow-hidden">
      {/* Fondo elegante */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-400 to-transparent" />
      <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full text-sm font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
          >
            {t("portfolio.badge")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {t("portfolio.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10"
          >
            {t("portfolio.description")}
          </motion.p>

          <Tabs
            defaultValue="todos"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full max-w-md mx-auto mb-12"
          >
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary-600 data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div
                      className="relative overflow-hidden rounded-lg cursor-pointer shadow-md hover-lift"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={800}
                          height={600}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-black/70 to-primary-900/70 flex items-center justify-center p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-center">
                          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                          <p className="text-sm text-gray-200 mb-4">{project.category}</p>
                          <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/20">
                            {t("portfolio.details")}
                          </Button>
                        </div>
                      </motion.div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl max-w-[95vw] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                    <DialogHeader>
                      <DialogTitle className="text-xl sm:text-2xl text-gray-900 dark:text-white">
                        {project.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={800}
                          height={600}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <DialogDescription className="text-base mb-4 text-gray-600 dark:text-gray-300">
                          {project.description}
                        </DialogDescription>
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
                            {t("portfolio.technologies")}
                          </h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 text-xs rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700 text-primary-600 dark:text-primary-400"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        {project.link.startsWith("http") ? (
                          <Button asChild className="bg-primary-600 hover:bg-primary-700 text-white">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              {t("portfolio.visit")} <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        ) : (
                          <Button asChild className="bg-primary-600 hover:bg-primary-700 text-white">
                            <Link href={project.link}>
                              {t("portfolio.visit")} <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Controles de navegación */}
        <div className="flex justify-center mt-8 sm:mt-12 space-x-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
            onClick={() => {
              const newTab = categories[Math.max(0, categories.findIndex((c) => c.id === activeTab) - 1)].id
              setActiveTab(newTab)
            }}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
            onClick={() => {
              const newTab =
                categories[Math.min(categories.length - 1, categories.findIndex((c) => c.id === activeTab) + 1)].id
              setActiveTab(newTab)
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

