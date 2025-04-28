"use server";

export async function sendContactForm(data: { name: string; email: string; phone: string; message: string }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Error en enviar el missatge");
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error al enviar el formulari:", error);
    throw error;
  }
}

