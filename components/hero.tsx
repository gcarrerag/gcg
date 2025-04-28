"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MousePointer, Code, Zap, ChevronDown } from 'lucide-react'
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Modified scroll animation parameters for smoother transition
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Reduced animation intensity - content will move and fade more gradually
  const y = useTransform(scrollYProgress, [0, 0.8], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-rose-50 to-amber-50 dark:from-gray-900 dark:to-black"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50 to-amber-50 dark:from-gray-900 dark:to-black" />

        {/* Subtle patterns */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-300 to-transparent" />
        <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Floating shapes */}
        <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-amber-200 to-rose-200 opacity-20 dark:opacity-10 blur-xl animate-float" />
        <div className="absolute bottom-1/3 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-rose-200 to-amber-200 opacity-20 dark:opacity-10 blur-xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-2/3 left-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-amber-100 to-rose-100 opacity-20 dark:opacity-10 blur-xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <AnimatePresence>
        {isLoaded && (
          <div className="w-full relative z-10 px-0 py-24 sm:py-32 md:py-40 flex flex-col items-center text-center">
            {/* Only apply scroll animation to decorative elements, not main content */}
            <motion.div
              style={{ y, opacity }}
              className="absolute inset-0 pointer-events-none"
            />

            {/* Main content without scroll animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-6 py-2 mb-6 border border-rose-200 dark:border-rose-800 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
            >
              <span className="text-rose-600 dark:text-rose-400 font-medium">{t("hero.badge")}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 max-w-5xl font-serif px-4"
            >
              <span className="inline-block">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="inline-block text-rose-600 dark:text-rose-400"
                >
                  {t("hero.title.create")}
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="inline-block text-gray-900 dark:text-white"
                >
                  {t("hero.title.web")}
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="inline-block text-amber-600 dark:text-amber-400"
                >
                  {t("hero.title.spectacular")}
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl px-4"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 px-4"
            >
              <Button asChild size="lg" className="group bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white transition-all duration-300 border-0">
		    <Link href="#contacto">
		      {t("hero.cta.quote")}
		      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
		    </Link>
		  </Button>

		  {/* Segon botó: cap al portfolio */}
		  <Button asChild size="lg" variant="outline" className="border-rose-200 dark:border-rose-800 text-gray-700 dark:text-gray-300 hover:bg-rose-100/50 dark:hover:bg-rose-900/20 transition-all duration-300">
		    <Link href="#portafolio">
		      {t("hero.cta.portfolio")}
		    </Link>
		  </Button>
		</motion.div>

            {/* Decorative image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-12 relative w-full max-w-5xl px-4 sm:px-8"
            >
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-200/30 to-amber-200/30 backdrop-blur-sm z-10"></div>
                <Image 
                  src="/portada.jpg?height=1080&width=1920" 
                  alt="Web design showcase"
                  width={1920}
                  height={1080}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 border border-white/20 rounded-xl z-20"></div>
              </div>
              
              {/* Floating elements over the image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute -bottom-6 -right-6 sm:bottom-8 sm:right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Gerard Carrera</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Web Developer</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-16 sm:mt-20 w-full max-w-3xl px-4"
            >
              {[
                { icon: <MousePointer className="h-6 w-6" />, stat: "100+", label: t("hero.stats.projects") },
                { icon: <Code className="h-6 w-6" />, stat: "5+", label: t("hero.stats.experience") },
                { icon: <Zap className="h-6 w-6" />, stat: "98%", label: t("hero.stats.clients") },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-rose-100 dark:border-rose-900/30"
                >
                  <div className="p-3 rounded-full bg-amber-50 dark:bg-amber-900/30 mb-4 text-amber-600 dark:text-amber-400">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold mb-1 text-gray-900 dark:text-white">{item.stat}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll Indicator with reduced animation */}
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <div className="flex flex-col items-center">
                <span className="text-gray-500 dark:text-gray-400 text-sm mb-2">{t("hero.scroll")}</span>
                <ChevronDown className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
