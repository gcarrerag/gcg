"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectLanguage = (lang: "es" | "ca") => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full overflow-hidden border border-gray-200/20 hover:border-gray-200/40 transition-colors focus:outline-none"
        aria-label={`Idioma actual: ${language === "es" ? "Español" : "Català"}`}
      >
        <img
          src={language === "es" ? "/es-flag.svg" : "/ca-flag.svg"}
          alt={language === "es" ? "Bandera española" : "Bandera catalana"}
          className="h-full w-full object-cover"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-36 sm:w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
          >
            <div className="py-1" role="menu" aria-orientation="vertical">
              <button
                onClick={() => selectLanguage("es")}
                className={`flex items-center w-full px-4 py-2 text-sm ${
                  language === "es" ? "text-gray-900 dark:text-white font-medium" : "text-gray-700 dark:text-gray-300"
                } hover:bg-gray-100 dark:hover:bg-gray-700`}
                role="menuitem"
              >
                <img src="/es-flag.svg" alt="Bandera española" className="h-4 w-4 mr-2" />
                Español
                {language === "es" && (
                  <svg
                    className="ml-auto h-4 w-4 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
              <button
                onClick={() => selectLanguage("ca")}
                className={`flex items-center w-full px-4 py-2 text-sm ${
                  language === "ca" ? "text-gray-900 dark:text-white font-medium" : "text-gray-700 dark:text-gray-300"
                } hover:bg-gray-100 dark:hover:bg-gray-700`}
                role="menuitem"
              >
                <img src="/ca-flag.svg" alt="Bandera catalana" className="h-4 w-4 mr-2" />
                Català
                {language === "ca" && (
                  <svg
                    className="ml-auto h-4 w-4 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

