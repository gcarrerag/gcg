"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Lightbulb, PenTool, Code, Rocket, CheckCircle, BarChart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Process() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredStep, setHoveredStep] = useState(null)

  const steps = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: t("process.discovery.title"),
      description: t("process.discovery.description"),
      color: "from-amber-400 to-orange-500",
      glowColor: "rgba(251, 191, 36, 0.3)",
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: t("process.design.title"),
      description: t("process.design.description"),
      color: "from-pink-400 to-rose-500",
      glowColor: "rgba(244, 114, 182, 0.3)",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: t("process.development.title"),
      description: t("process.development.description"),
      color: "from-primary-400 to-blue-500",
      glowColor: "rgba(6, 182, 212, 0.3)",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: t("process.testing.title"),
      description: t("process.testing.description"),
      color: "from-green-400 to-emerald-500",
      glowColor: "rgba(16, 185, 129, 0.3)",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: t("process.launch.title"),
      description: t("process.launch.description"),
      color: "from-purple-400 to-indigo-500",
      glowColor: "rgba(139, 92, 246, 0.3)",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: t("process.growth.title"),
      description: t("process.growth.description"),
      color: "from-blue-400 to-violet-500",
      glowColor: "rgba(96, 165, 250, 0.3)",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="proceso" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Fondo elegante */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-400 to-transparent" />
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
            {t("process.badge")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {t("process.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            {t("process.description")}
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 relative"
        >
          {/* Línea de conexión central */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 hidden lg:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative z-10"
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="relative p-4 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-primary-600 dark:text-primary-400 mb-6 transition-all duration-300 transform hover:scale-105 shadow-md">
                    {step.icon}
                  </div>

                  {/* Número de paso */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h3>

                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>

                {/* Línea de conexión animada */}
                {index < steps.length - 1 && (index % 3 !== 2 || index === 0) && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    className="absolute top-1/2 right-0 h-0.5 bg-primary-500/50 w-full transform translate-x-1/2 hidden lg:block"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Indicador de flujo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <div className="px-6 py-3 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700 text-primary-600 dark:text-primary-400 flex items-center space-x-2">
            <span>{t("process.workflow")}</span>
            <div className="relative w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute top-0 left-0 right-0 bottom-0 bg-primary-600"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

