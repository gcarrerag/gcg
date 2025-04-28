"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Menu, X, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { useMobile } from "@/hooks/use-mobile"
import { useMounted } from "@/hooks/use-mounted"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "@/contexts/language-context"

export default function Header() {
  const mounted = useMounted()
  const { t } = useLanguage()

  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(null)
  const [hoverLink, setHoverLink] = useState(null)
  const isMobile = useMobile()
  const headerRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.98])
  const headerBlur = useTransform(scrollYProgress, [0, 0.1], [0, 8])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const navItems = [
    { name: t("nav.home"), href: "#" },
    { name: t("nav.services"), href: "#servicios" },
    { name: t("nav.portfolio"), href: "#portafolio" },
    { name: t("nav.process"), href: "#proceso" },
    { name: t("nav.testimonials"), href: "#testimonios" },
    { name: t("nav.contact"), href: "#contacto" },
  ]

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  }

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      height: "100dvh",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const mobileItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  const handleLinkClick = (index) => {
    setActiveLink(index)
    if (isMobile) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      ref={headerRef}
      style={{
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/10 dark:bg-gray-900/70 py-3 shadow-soft" : "bg-transparent py-5"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <Link href="/" className="relative z-50">
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="text-xl sm:text-2xl font-bold font-serif"
          >
            <span className="text-gray-900 dark:text-white">
              GCG<span className="text-rose-500 dark:text-rose-400">Solutions</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                className="relative"
                onMouseEnter={() => setHoverLink(index)}
                onMouseLeave={() => setHoverLink(null)}
              >
                <Link
                  href={item.href}
                  onClick={() => handleLinkClick(index)}
                  className={`text-sm font-medium transition-colors relative z-10 ${
                    activeLink === index
                      ? "text-rose-500 dark:text-rose-400"
                      : "text-gray-700 dark:text-gray-200 hover:text-rose-500 dark:hover:text-rose-400"
                  }`}
                >
                  {item.name}
                </Link>
                {/* Hover effect */}
                <AnimatePresence>
                  {hoverLink === index && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "100%" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-0 left-0 h-px bg-rose-500 dark:bg-rose-400"
                    />
                  )}
                </AnimatePresence>
                {/* Active indicator */}
                {activeLink === index && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 w-full h-px bg-rose-500 dark:bg-rose-400"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
            <div className="flex items-center space-x-3">
              <LanguageSwitcher />
              <ModeToggle />
              <motion.div variants={itemVariants}>
                <Link href="/#contacto">
		  <Button
		    size="sm"
		    className="bg-rose-500 hover:bg-rose-600 text-white border-0 transition-all duration-300"
		  >
		    {t("nav.consultation")}
		    <ChevronRight className="ml-1 h-4 w-4" />
		  </Button>
		</Link>

              </motion.div>
            </div>
          </motion.nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="relative z-50 text-gray-700 dark:text-gray-200 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        )}

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-40 flex flex-col items-center justify-center"
            >
              <nav className="flex flex-col items-center space-y-6 sm:space-y-8">
                {navItems.map((item, index) => (
                  <motion.div key={item.name} variants={mobileItemVariants} className="relative">
                    <Link
                      href={item.href}
                      onClick={() => handleLinkClick(index)}
                      className="text-xl font-medium text-gray-700 dark:text-gray-200 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                    {/* Active indicator */}
                    {activeLink === index && (
                      <motion.div
                        layoutId="activeMobileNav"
                        className="absolute -bottom-2 left-0 w-full h-px bg-rose-500 dark:bg-rose-400"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                ))}
                <motion.div variants={mobileItemVariants} className="mt-4">
                  <Link href="/#contacto">
			  <Button className="bg-rose-500 hover:bg-rose-600 text-white border-0 transition-all duration-300">
			    {t("nav.consultation")}
			    <ChevronRight className="ml-1 h-4 w-4" />
			  </Button>
			</Link>

                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

