"use server"

export async function sendContactForm(data: {
  name: string
  email: string
  phone: string
  message: string
}) {
  // Simular un retraso para la demostración
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Aquí iría la lógica para enviar el email, guardar en base de datos, etc.
  console.log("Datos del formulario:", data)

  return { success: true }
}
