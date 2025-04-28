"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DynamicProjectPage() {
  const { id } = useParams()
  const router = useRouter()

  // Si l'id no existeix, redirigim o mostrem error.
  useEffect(() => {
    const validIds = ["ecommerce"] // Afegirem més si tens més landings
    if (!validIds.includes(id as string)) {
      router.push("/") // Torna a l'inici si no troba l'id
    }
  }, [id, router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Carregant...</h1>
    </div>
  )
}
