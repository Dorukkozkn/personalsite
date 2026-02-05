import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Stack } from "@/components/stack"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6">
        <Hero />
        <Experience />
        <Stack />
        <Contact />

        <footer className="py-10 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © 2026 Doruk Özkan. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  )
}
