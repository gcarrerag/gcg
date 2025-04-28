import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Falten camps requerits" }, { status: 400 })
    }

    // Configurar transporter de nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // El teu Gmail
        pass: process.env.EMAIL_PASS, // Contrasenya o "App password"
      },
    })

    // Configurar contingut del correu
    await transporter.sendMail({
      from: `"Web Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // On vols rebre'l
      replyTo: email, // <<--- AIXÒ FA QUE RESPONGUIS DIRECTAMENT AL CLIENT
      subject: `Nou missatge de ${name}`,
      html: `
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telèfon:</strong> ${phone}</p>
        <p><strong>Missatge:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true, message: "Missatge enviat correctament" }, { status: 200 })
  } catch (error) {
    console.error("Error enviant el correu:", error)
    return NextResponse.json({ error: "Error intern" }, { status: 500 })
  }
}

