"use client"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useMounted } from "@/hooks/use-mounted"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const iconVariants = {
    initial: { scale: 0.6, opacity: 0, rotate: -90 },
    animate: { scale: 1, opacity: 1, rotate: 0, transition: { duration: 0.3 } },
    exit: { scale: 0.6, opacity: 0, rotate: 90, transition: { duration: 0.3 } },
  }

  const getIcon = () => {
    if (theme === "light") return <Sun className="h-[1.2rem] w-[1.2rem]" />
    if (theme === "dark") return <Moon className="h-[1.2rem] w-[1.2rem]" />
    return <Monitor className="h-[1.2rem] w-[1.2rem]" />
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <AnimatePresence mode="sync">
            <motion.div key={theme} variants={iconVariants} initial="initial" animate="animate" exit="exit">
              {getIcon()}
            </motion.div>
          </AnimatePresence>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-2"
        >
          <Sun className="h-4 w-4" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-2"
        >
          <Moon className="h-4 w-4" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-2"
        >
          <Monitor className="h-4 w-4" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

