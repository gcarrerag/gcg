"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"
import { sendContactForm } from "@/app/actions/contact"
import { useLanguage } from "@/contexts/language-context"

// Definir el esquema de validación
const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Introduce un email válido" }),
  phone: z.string().min(9, { message: "Introduce un número de teléfono válido" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
})

export default function Contact() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const ref = useRef(null)
  const [hoveredField, setHoveredField] = useState(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Inicializar el formulario con react-hook-form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  // Manejar el envío del formulario
  async function onSubmit(data) {
    setIsSubmitting(true)
    try {
      const result = await sendContactForm(data)
      if (result.success) {
        toast({
          title: "Mensaje enviado",
          description: "Nos pondremos en contacto contigo pronto.",
        })
        form.reset()
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" ref={ref} className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
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
            {t("contact.badge")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {t("contact.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            {t("contact.description")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Información de contacto */}
          <motion.div style={{ y, opacity }} className="space-y-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t("contact.info.title")}</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-gray-700 dark:text-gray-200">{t("contact.info.email")}</h4>
                      <p className="text-gray-600 dark:text-gray-300">info@webstudio.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-gray-700 dark:text-gray-200">{t("contact.info.phone")}</h4>
                      <p className="text-gray-600 dark:text-gray-300">+34 612 345 678</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-gray-700 dark:text-gray-200">
                        {t("contact.info.location")}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">Calle Principal 123, Barcelona, España</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium mb-4 text-gray-700 dark:text-gray-200">{t("contact.hours.title")}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{t("contact.hours.weekdays")}</p>
                  <p className="text-gray-600 dark:text-gray-300">{t("contact.hours.weekend")}</p>
                </div>
              </div>
            </div>

            {/* Chat Bot Teaser */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 relative overflow-hidden">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-200">{t("contact.chat.title")}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{t("contact.chat.description")}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-auto border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                >
                  {t("contact.chat.button")}
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]), opacity }}>
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t("contact.form.title")}</h3>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem
                          onMouseEnter={() => setHoveredField("name")}
                          onMouseLeave={() => setHoveredField(null)}
                          className="relative"
                        >
                          <FormLabel className="text-gray-700 dark:text-gray-200">{t("contact.form.name")}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t("contact.form.name.placeholder")}
                              {...field}
                              className={`bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500/20 transition-all duration-300 ${hoveredField === "name" ? "border-primary-400" : ""}`}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem
                            onMouseEnter={() => setHoveredField("email")}
                            onMouseLeave={() => setHoveredField(null)}
                          >
                            <FormLabel className="text-gray-700 dark:text-gray-200">
                              {t("contact.form.email")}
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t("contact.form.email.placeholder")}
                                {...field}
                                className={`bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500/20 transition-all duration-300 ${hoveredField === "email" ? "border-primary-400" : ""}`}
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem
                            onMouseEnter={() => setHoveredField("phone")}
                            onMouseLeave={() => setHoveredField(null)}
                          >
                            <FormLabel className="text-gray-700 dark:text-gray-200">
                              {t("contact.form.phone")}
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t("contact.form.phone.placeholder")}
                                {...field}
                                className={`bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500/20 transition-all duration-300 ${hoveredField === "phone" ? "border-primary-400" : ""}`}
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem
                          onMouseEnter={() => setHoveredField("message")}
                          onMouseLeave={() => setHoveredField(null)}
                        >
                          <FormLabel className="text-gray-700 dark:text-gray-200">
                            {t("contact.form.message")}
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t("contact.form.message.placeholder")}
                              className={`min-h-32 bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500/20 transition-all duration-300 ${hoveredField === "message" ? "border-primary-400" : ""}`}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          {t("contact.form.sending")}
                        </span>
                      ) : (
                        <span className="flex items-center">
                          {t("contact.form.submit")}
                          <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

