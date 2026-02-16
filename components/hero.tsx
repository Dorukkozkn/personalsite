"use client"

import { useEffect, useState } from "react"

function VerifiedBadge() {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      className="w-5 h-5"
      aria-label="Verified"
    >
      <path
        d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681.132-.637.075-1.299-.165-1.903.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246-5.683 6.206z"
        fill="#1D9BF0"
      />
    </svg>
  )
}

export function Hero() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "c" && !e.metaKey && !e.ctrlKey) {
        navigator.clipboard.writeText("dorukkozknn@hotmail.com")
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <section className="py-16 md:py-24 animate-fade-in">
      <div className="flex items-center gap-4 mb-8">
        <img
          src="/images/doruk-profile.png"
          alt="Doruk Özkan"
          className="w-16 h-16 rounded-xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <div>
          <div className="flex items-center gap-1.5">
            <h1 className="text-2xl font-semibold text-foreground">Doruk Özkan</h1>
            <VerifiedBadge />
          </div>
          <p className="text-muted-foreground">Web & IOS Developer</p>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        {"Hey, I'm Doruk Özkan, a web and iOS developer based in Turkiye 🇹🇷 I spend most of my time building clean, performant digital experiences for both web and mobile. I'm passionate about crafting intuitive user interfaces, smooth animations, and developing products that feel simple, fast, and accessible."}
      </p>

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground hover:bg-muted transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <span>Press</span>
        <kbd className="px-2 py-0.5 rounded bg-background text-foreground font-mono text-xs border border-border">c</kbd>
        <span>to copy my email</span>
        {copied && (
          <span className="ml-2 text-green-500 text-xs animate-fade-in">Copied!</span>
        )}
      </div>
    </section>
  )
}
