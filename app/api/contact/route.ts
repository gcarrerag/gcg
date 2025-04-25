import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validar los datos
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    // Aquí iría la lógica para enviar el email, guardar en base de datos, etc.
    // Por ejemplo, usando un servicio de email como SendGrid, Mailgun, etc.

    console.log("Datos de contacto recibidos:", { name, email, phone, message })

    // Simular un retraso para la demostración
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ success: true, message: "Mensaje enviado correctamente" }, { status: 200 })
  } catch (error) {
    console.error("Error al procesar la solicitud de contacto:", error)
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
  }
}
