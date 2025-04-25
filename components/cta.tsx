"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function CTA() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Fondo elegante */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-400 to-transparent" />
      <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container px-4 relative z-10">
        <motion.div style={{ y, opacity }} className="max-w-3xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 text-center relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <Sparkles className="h-10 w-10 mx-auto mb-6 text-primary-500" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">{t("cta.title")}</h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">{t("cta.description")}</p>
              <Button
                size="lg"
                className="group bg-primary-600 hover:bg-primary-700 text-white transition-all duration-300"
              >
                {t("cta.button")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

