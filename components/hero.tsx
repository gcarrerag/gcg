"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MousePointer, Code, Zap, ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black"
    >
      {/* Fondo elegante */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradiente de fondo */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black" />

        {/* Patrones sutiles */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-400 to-transparent" />
        <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Contenido */}
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            style={{ y, opacity }}
            className="container relative z-10 px-4 py-24 sm:py-32 md:py-40 flex flex-col items-center text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-6 py-2 mb-6 border border-primary-200 dark:border-primary-800 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
            >
              <span className="text-primary-600 dark:text-primary-400 font-medium">{t("hero.badge")}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 max-w-5xl font-serif"
            >
              <span className="inline-block">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="inline-block text-primary-600 dark:text-primary-400"
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
                  className="inline-block text-primary-600 dark:text-primary-400"
                >
                  {t("hero.title.spectacular")}
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group bg-primary-600 hover:bg-primary-700 text-white transition-all duration-300"
              >
                {t("hero.cta.quote")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                {t("hero.cta.portfolio")}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 w-full max-w-3xl"
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
                  className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-3 rounded-full bg-primary-50 dark:bg-primary-900/30 mb-4 text-primary-600 dark:text-primary-400">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold mb-1 text-gray-900 dark:text-white">{item.stat}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

