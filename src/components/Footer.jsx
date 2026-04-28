export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Pankaj Baid. Built with React + Tailwind.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/pankajbaid567" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-primary transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/pankaj-baid-0109b1226/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-primary transition-colors">LinkedIn</a>
          <a href="https://public.tableau.com/app/profile/pankaj.baid6660" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-primary transition-colors">Tableau</a>
        </div>
      </div>
    </footer>
  );
}
