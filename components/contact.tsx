import { Mail, Github } from "lucide-react"

const contacts = [
  {
    label: "Email",
    value: "dorukkozknn@hotmail.com",
    href: "mailto:dorukkozknn@hotmail.com",
    icon: Mail,
  },
  {
    label: "X.com",
    value: "@dorukkozkn",
    href: "https://x.com/dorukkozkn",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "@dorukkozkn",
    href: "https://github.com/dorukkozkn",
    icon: Github,
  },
]

export function Contact() {
  return (
    <section className="py-16">
      <h2 className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-8 animate-fade-in">
        CONTACT
      </h2>

      <p className="text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        You can contact me using the links below.
      </p>

      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-muted-foreground/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group animate-fade-in-up"
            style={{ animationDelay: `${0.15 + index * 0.05}s` }}
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all duration-300">
              <contact.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{contact.label}</p>
              <p className="text-foreground font-medium">{contact.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
