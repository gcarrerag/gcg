"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function Testimonials() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const testimonialsRef = useRef(null)
  const controls = useAnimation()
  const intervalRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: "María García",
      position: "CEO, Fashion Store",
      image: "/placeholder.svg?height=200&width=200",
      content:
        "Trabajar con este equipo ha sido una experiencia increíble. Entendieron perfectamente nuestra visión y la transformaron en una tienda online que ha superado todas nuestras expectativas. Las ventas han aumentado un 40% desde el lanzamiento.",
      company: "ModaExpress",
      rating: 5,
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      position: "Director de Marketing, Tech Solutions",
      image: "/placeholder.svg?height=200&width=200",
      content:
        "Buscábamos una web que reflejara nuestra innovación tecnológica y entregara una experiencia de usuario excepcional. El resultado final no solo es visualmente impresionante, sino que también ha mejorado significativamente nuestras conversiones.",
      company: "InnovaTech",
      rating: 5,
    },
    {
      id: 3,
      name: "Laura Martínez",
      position: "Fundadora, Estudio Creativo",
      image: "/placeholder.svg?height=200&width=200",
      content:
        "Como estudio creativo, teníamos altas expectativas para nuestro sitio web. El equipo no solo cumplió con ellas, sino que las superó. Su atención al detalle y capacidad para traducir nuestras ideas en código es realmente impresionante.",
      company: "CreativeHub",
      rating: 5,
    },
  ]

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        nextTestimonial()
      }, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoplay, currentIndex])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleMouseEnter = () => {
    setAutoplay(false)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const handleMouseLeave = () => {
    setAutoplay(true)
  }

  return (
    <section id="testimonios" className="py-20 md:py-32 bg-white dark:bg-black relative overflow-hidden">
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
            {t("testimonials.badge")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {t("testimonials.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            {t("testimonials.description")}
          </motion.p>
        </div>

        <div
          ref={testimonialsRef}
          className="relative max-w-4xl mx-auto px-4 sm:px-0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute top-1/2 -translate-y-1/2 left-0 sm:-left-4 md:-left-12 z-10">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
              onClick={prevTestimonial}
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 sm:-right-4 md:-right-12 z-10">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
              onClick={nextTestimonial}
              aria-label="Testimonio siguiente"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>

          <div className="overflow-hidden px-4">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-primary-100 dark:border-primary-900">
                      <Image
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-4 sm:mb-6 text-primary-400">
                      <Quote className="h-8 w-8 sm:h-10 sm:w-10 opacity-20 mx-auto md:mx-0" />
                    </div>
                    <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 italic text-gray-700 dark:text-gray-200">
                      "{testimonials[currentIndex].content}"
                    </p>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2">
                        {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                      </p>
                      <div className="flex items-center justify-center md:justify-start">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 sm:h-4 sm:w-4 ${
                              i < testimonials[currentIndex].rating
                                ? "text-primary-500 fill-primary-500"
                                : "text-gray-300 dark:text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary-600" : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

