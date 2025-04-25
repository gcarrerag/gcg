"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Palette, Code2, ShoppingCart, Search, Smartphone, Rocket } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function Services() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredCard, setHoveredCard] = useState(null)

  const services = [
    {
      icon: <Palette className="h-10 w-10" />,
      title: t("services.uiux.title"),
      description: t("services.uiux.description"),
      color: "from-pink-500 to-purple-500",
      glowColor: "rgba(236, 72, 153, 0.3)",
    },
    {
      icon: <Code2 className="h-10 w-10" />,
      title: t("services.development.title"),
      description: t("services.development.description"),
      color: "from-primary-500 to-blue-500",
      glowColor: "rgba(6, 182, 212, 0.3)",
    },
    {
      icon: <ShoppingCart className="h-10 w-10" />,
      title: t("services.ecommerce.title"),
      description: t("services.ecommerce.description"),
      color: "from-green-500 to-emerald-500",
      glowColor: "rgba(16, 185, 129, 0.3)",
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: t("services.seo.title"),
      description: t("services.seo.description"),
      color: "from-amber-500 to-orange-500",
      glowColor: "rgba(245, 158, 11, 0.3)",
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: t("services.responsive.title"),
      description: t("services.responsive.description"),
      color: "from-blue-500 to-indigo-500",
      glowColor: "rgba(59, 130, 246, 0.3)",
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: t("services.maintenance.title"),
      description: t("services.maintenance.description"),
      color: "from-purple-500 to-violet-500",
      glowColor: "rgba(139, 92, 246, 0.3)",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="servicios" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
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
            {t("services.badge")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {t("services.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            {t("services.description")}
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group"
            >
              <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 h-full relative z-10 transition-all duration-300 hover-lift">
                <CardHeader>
                  <div
                    className={`p-3 w-16 h-16 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

