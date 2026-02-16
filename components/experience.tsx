const experiences = [
  {
    period: "2026 — PRESENT",
    role: "Vice President of School Representative",
    company: "AGORA",
    description: "I am taking on the role of Vice President of the School Representative Office in the largest community in Denizli, at Agora.",
  },  
  {
    period: "2026 — PRESENT",
    role: "Head Of IT",
    company: "ORİON",
    description: "I am the Information Technology & Design lead of the ORİON.",
  },  
  {
    period: "2026 — PRESENT",
    role: "Head Of IT",
    company: "TTMUN",
    description: "I am the Information Technology & Design lead of the TTMUN.",
  },
  {
    period: "2026 — PRESENT",
    role: "Head Of IT",
    company: "DKRIZ",
    description: "I am the Information Technology & Design lead of the DENİZLİ Collage crisis.",
  },
  {
    period: "2025 — PRESENT",
    role: "Head Of IT",
    company: "TEDDMUN",
    description:
      "I am the Information Technology & Design lead of the TED Denizli Model United Nations Club, working on web development, design, and social media management.",
  },
  {
    period: "2025 — 2026",
    role: "Head Of IT",
    company: "TEDMÜN",
    description:
      "I am the Information Technology lead of the TED Denizli Debate Club, working on web development and design.",
  },
  {
    period: "2024 — 2025",
    role: "Support",
    company: "ADALANCES MINECRAFT",
    description: "I previously served as an Advanced Minecraft Discord Support staff.",
  },
]

export function Experience() {
  return (
    <section className="py-16 w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 animate-fade-in">
        EXPERIENCE
      </h2>

      <p className="text-muted-foreground mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        {"Throughout my career, I've worked on various projects, from building scalable systems to designing user-friendly interfaces. Here's a brief overview."}
      </p>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group p-5 rounded-xl bg-card border border-border hover:border-muted-foreground/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${0.15 + index * 0.05}s` }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <span className="text-xs text-muted-foreground font-mono shrink-0 md:w-36">
                {exp.period}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium text-foreground">{exp.role}</span>
                  <span className="text-muted-foreground">at</span>
                  <span className="text-foreground font-medium">{exp.company}</span>
                </div>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
