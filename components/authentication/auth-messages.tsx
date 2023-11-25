"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"

export function AuthMessages() {
  const { toast } = useToast()

  const searchParams = useSearchParams()
  const error = searchParams.get("error")
  const message = searchParams.get("message")
  const email = searchParams.get("email")

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      })
    }
    if (message) {
      toast({
        title: "Success",
        description: message,
        variant: "success",
      })
    }
    if (email) {
      toast({
        title: "Thank you for your request!",
        description:
          "We're thrilled to have you on board. Look out for our welcome email in your inbox soon, where we'll share exciting updates, exclusive offers, and insights. Stay tuned!",
        variant: "success",
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, message])

  return <Toaster key={"auth-messages"} />
}
