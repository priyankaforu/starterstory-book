"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function BackButton() {
  const router = useRouter()

  const handleBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      router.back()
    } else {
      // Fallback to home if no history
      router.push("/")
    }
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleBack} className="gap-2">
      <span>←</span> Back
    </Button>
  )
}
