"use client"

import { useEffect, useRef } from "react"

const tools = [
  { name: "Xcode", logo: "/images/logo-xcode.png" },
  { name: "Visual Studio Code", logo: "/images/logo-vscode.png" },
  { name: "Premiere Pro", logo: "/images/logo-premiere.png" },
  { name: "Photoshop", logo: "/images/logo-photoshop.png" },
  { name: "Framer", logo: "/images/logo-framer.png" },
  { name: "Cursor", logo: "/images/logo-cursor.png" },
]

export function Stack() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 0.5
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="py-16">
      <h2 className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-8 animate-fade-in">
        STACK
      </h2>

      <div className="relative overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden"
          style={{ scrollBehavior: "auto" }}
        >
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border shrink-0 hover:border-muted-foreground/50 hover:shadow-sm transition-all duration-300"
            >
              <img 
                src={tool.logo || "/placeholder.svg"} 
                alt={tool.name} 
                className="w-6 h-6 rounded object-cover"
              />
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
