"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface ScrollTriggerProps {
  children: React.ReactNode
  threshold?: number
}

export function ScrollTrigger({ children, threshold = 0.1 }: ScrollTriggerProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return (
    <div ref={ref} className="opacity-0">
      {children}
    </div>
  )
}

