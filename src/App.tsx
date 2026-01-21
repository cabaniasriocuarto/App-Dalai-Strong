const highlights = [
  {
    title: 'Plan nutricional claro',
    description:
      'Recibe recomendaciones simples y accionables para cada etapa de tu tratamiento.',
  },
  {
    title: 'Seguimiento diario',
    description:
      'Registra comidas, síntomas y avances con recordatorios fáciles de usar.',
  },
  {
    title: 'Apoyo integral',
    description:
      'Accede a recursos y mensajes que te acompañan durante todo el proceso.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-10 pt-12">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
          Dalai Strong
        </span>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Tu salud es el centro: acompañamos tu plan nutricional con calidez y tecnología
            humana.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            La app Dalai Strong está lista para ayudarte a organizar tu alimentación durante el
            tratamiento oncológico y ofrecerte un espacio seguro para seguir tu progreso.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-emerald-300">
            Crear mi plan
          </button>
          <button className="rounded-full border border-slate-700 px-6 py-3 text-base font-semibold text-slate-200 transition hover:border-slate-500">
            Ver demo
          </button>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 sm:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-900/40"
          >
            <h2 className="text-xl font-semibold text-emerald-200">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
          </article>
        ))}
      </main>
    </div>
  )
}

export default App
