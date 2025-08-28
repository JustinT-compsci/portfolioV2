'use client'

export function Footer() {
  return (
    // <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
    <footer className="mt-24 mb-12 h-px w-full bg-gradient-to-r from-transparent via-violet-400 to-transparent">
      {
        <div className="flex w-full justify-between pt-5 pb-5 text-sm text-zinc-500">
          <div>Last updated 08/25/2025</div>
          <div>Justin Thomas</div>
        </div>
      }
    </footer>
  )
}
