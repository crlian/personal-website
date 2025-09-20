const projects = [
  {
    title: "Aria Studio",
    description:
      "Plataforma que automatiza la ideación y prototipado de experiencias digitales para equipos distribuidos.",
    result:
      "Aceleramos la validación de conceptos en un 60% al integrar research, diseño y métricas en un solo panel.",
    stack: ["Next.js", "TypeScript", "Convex", "Tailwind CSS"],
    year: "2024",
    href: null,
  },
  {
    title: "SparkOps",
    description:
      "Dashboard operativo para startups que centraliza crecimiento, soporte y analítica en tiempo real.",
    result:
      "Visibilidad instantánea de KPIs críticos con workflows colaborativos y automatizaciones sin código.",
    stack: ["Remix", "PostgreSQL", "Prisma", "tRPC"],
    year: "2023",
    href: null,
  },
  {
    title: "Lumen Retail",
    description:
      "Suite omnicanal que alinea promociones, inventario y experiencia de tienda con insights predictivos.",
    result:
      "Incrementamos un 18% las ventas cruzadas al personalizar campañas por micromomentos.",
    stack: ["Next.js", "Supabase", "Tailwind CSS", "Segment"],
    year: "2022",
    href: null,
  },
];

const pillars = [
  {
    title: "Estrategia que conecta",
    description:
      "Clarifico la visión y traduzco objetivos de negocio en experiencias digitales que generan confianza.",
  },
  {
    title: "Diseño con intención",
    description:
      "Construyo interfaces sobrias, accesibles y con microdetalles que comunican la marca sin distraer.",
  },
  {
    title: "Entrega sin fricción",
    description:
      "Integro stack moderno para iterar rápido, medir impacto y evolucionar el producto constantemente.",
  },
];

const tools = [
  "React / Next.js",
  "TypeScript",
  "Node.js",
  "Supabase",
  "Prisma",
  "Tailwind CSS",
  "Framer Motion",
  "Figma",
  "Storybook",
  "Product Discovery",
];

const metrics = [
  { value: "+20", label: "productos lanzados" },
  { value: "08", label: "años creando interfaces" },
  { value: "3x", label: "mejora promedio en KPIs" },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(127,90,240,0.18),_transparent_55%)]" />

      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 sm:px-10">
        <header className="glass-header flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.4em] text-white/60">
              Portafolio · 2024
            </span>
            <p className="font-[var(--font-display)] text-xl text-white sm:text-2xl">
              Cesar Rico
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-sm text-white/70">
            <a className="rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:border-white/40 hover:text-white/80" href="#inicio">
              Inicio
            </a>
            <a className="rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:border-white/40 hover:text-white/80" href="#proyectos">
              Proyectos
            </a>
            <a className="rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:border-white/40 hover:text-white/80" href="#enfoque">
              Enfoque
            </a>
            <a className="rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:border-white/40 hover:text-white/80" href="#contacto">
              Contacto
            </a>
          </nav>
        </header>

        <section id="inicio" className="flex flex-col items-center gap-12 text-center">
          <div className="glass-block relative flex min-h-[360px] w-full max-w-xl flex-col items-center justify-center overflow-hidden p-10 sm:min-h-[420px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_75%)]" />
            <div className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(127,90,240,0.6)_0%,_rgba(127,90,240,0.12)_38%,_transparent_70%)] blur-3xl opacity-80" />
            <div className="relative z-10 flex h-56 w-56 items-center justify-center overflow-hidden rounded-[38px] border border-white/15 bg-white/10 shadow-[0_22px_70px_-32px_rgba(127,90,240,0.9)]">
              <span className="text-xs uppercase tracking-[0.32em] text-white/70">
                Aquí irá tu foto
              </span>
            </div>
          </div>

          <div className="flex max-w-2xl flex-col items-center gap-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/80 backdrop-blur">
              Diseñador y frontend
            </span>
            <h1 className="font-[var(--font-display)] text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Creo productos digitales sobrios que escalan con intención y personalidad.
            </h1>
            <p className="max-w-xl text-base text-white/70 sm:text-lg">
              Acompaño a equipos y founders a transformar ideas en experiencias digitales con una estética precisa, procesos claros y métricas que prueban el impacto.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contacto"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Reservar espacio en la agenda
              </a>
              <a
                href="#proyectos"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
              >
                Ver proyectos
              </a>
            </div>
          </div>

          <div className="glass-block w-full max-w-3xl grid gap-6 p-6 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="space-y-2">
                <p className="font-[var(--font-display)] text-4xl text-white sm:text-5xl">
                  {metric.value}
                </p>
                <p className="text-sm text-white/60">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="proyectos" className="space-y-10">
          <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-white/60">Proyectos seleccionados</p>
              <h2 className="font-[var(--font-display)] text-3xl text-white sm:text-4xl">
                Casos que reflejan mi manera de construir
              </h2>
            </div>
            <p className="max-w-md text-sm text-white/60">
              Producto digital hecho a medida: desde la arquitectura hasta el último componente. Colaboro con startups en etapas cero a uno o en escalamiento.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="glass-block group relative flex h-full flex-col justify-between p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-40px_rgba(127,90,240,0.7)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.32em] text-white/50">
                    <span>{project.year}</span>
                    <span>{project.stack[0]}</span>
                  </div>
                  <h3 className="font-[var(--font-display)] text-2xl text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {project.description}
                  </p>
                  <p className="text-sm text-white/50">{project.result}</p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  {project.href ? (
                    <a
                      href={project.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-white/70"
                    >
                      Ver proyecto
                      <span aria-hidden>→</span>
                    </a>
                  ) : (
                    <span className="text-sm text-white/40">Caso privado · pídeme una demo</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="enfoque" className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/60">Metodología</p>
            <h2 className="font-[var(--font-display)] text-3xl text-white sm:text-4xl">
              Un marco claro para mover productos de la idea al mercado
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="glass-block p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <h3 className="font-[var(--font-display)] text-lg text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/65">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="glass-block space-y-6 p-8">
            <h3 className="text-sm uppercase tracking-[0.32em] text-white/60">Herramientas clave</h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-white/70 sm:grid-cols-3 lg:grid-cols-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-center backdrop-blur"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="text-sm text-white/60">
              Selecciono tecnología ligera y escalable según el contexto: priorizo velocidad de entrega, mantenibilidad y experiencia.
            </p>
          </aside>
        </section>

        <section id="contacto" className="glass-block space-y-8 p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.32em] text-white/60">
                Colaboremos
              </p>
              <h2 className="font-[var(--font-display)] text-3xl text-white sm:text-4xl">
                ¿Listo para conversar sobre tu próximo lanzamiento?
              </h2>
              <p className="max-w-xl text-sm text-white/65">
                Tengo espacio limitado cada trimestre para proyectos que buscan impacto medible. Escríbeme y diseñamos una ruta clara.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 text-sm text-white/70">
              <a
                href="mailto:hola@cesarrico.dev"
                className="rounded-full border border-white/25 bg-white/10 px-5 py-3 transition hover:border-white/40 hover:text-white backdrop-blur"
              >
                hola@cesarrico.dev
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/25 bg-white/10 px-5 py-3 transition hover:border-white/40 hover:text-white backdrop-blur"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/25 bg-white/10 px-5 py-3 transition hover:border-white/40 hover:text-white backdrop-blur"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/10 pt-10 text-xs uppercase tracking-[0.32em] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>Cesar Rico</span>
          <span>Portafolio · {new Date().getFullYear()}</span>
        </footer>
      </main>
    </div>
  );
}
