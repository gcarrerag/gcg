"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: t("footer.services"),
      links: [
        { name: t("footer.services.design"), href: "#" },
        { name: t("footer.services.development"), href: "#" },
        { name: t("footer.services.ecommerce"), href: "#" },
        { name: t("footer.services.seo"), href: "#" },
        { name: t("footer.services.maintenance"), href: "#" },
      ],
    },
    {
      title: t("footer.company"),
      links: [
        { name: t("footer.company.about"), href: "#" },
        { name: t("footer.company.team"), href: "#" },
        { name: t("footer.company.work"), href: "#" },
        { name: t("footer.company.testimonials"), href: "#" },
        { name: t("footer.company.blog"), href: "#" },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { name: t("footer.legal.privacy"), href: "#" },
        { name: t("footer.legal.terms"), href: "#" },
        { name: t("footer.legal.cookies"), href: "#" },
      ],
    },
  ]

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
  ]

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, text: "info@webstudio.com" },
    { icon: <Phone className="h-5 w-5" />, text: "+34 612 345 678" },
    { icon: <MapPin className="h-5 w-5" />, text: "Calle Principal 123, Barcelona" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
    <footer className="bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Fondo elegante */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-primary-400 to-transparent" />
      <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Newsletter */}
      <div className="relative border-b border-gray-200 dark:border-gray-800">
        <div className="container px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-center relative overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("footer.newsletter.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
                  {t("footer.newsletter.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder={t("footer.newsletter.placeholder")}
                    className="flex-1 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500/20 focus:outline-none text-gray-900 dark:text-white"
                  />
                  <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                    {t("footer.newsletter.button")}
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container px-4 py-12 md:py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {/* Logo y descripción */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold font-serif text-gray-900 dark:text-white">
                Web<span className="text-primary-600 dark:text-primary-400">Studio</span>
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Creamos experiencias web elegantes que transforman ideas en realidades digitales. Diseño sofisticado,
              desarrollo profesional y resultados excepcionales para impulsar tu negocio hacia el éxito.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300"
                >
                  <div className="p-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enlaces */}
          {footerLinks.map((column, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} WebStudio. {t("footer.copyright")}
          </p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {t("footer.legal.privacy")}
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {t("footer.legal.terms")}
            </Link>
          </div>
        </div>
      </div>

      {/* Botón de volver arriba */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ y: -5 }}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.a>
      </div>
    </footer>
  )
}

