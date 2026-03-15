export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-fg-muted font-mono">
        <p>© {new Date().getFullYear()} Sufyanuddin Taha Mohammed. Crafted with ♥</p>
        <p className="text-xs">Built with Next.js · TypeScript · Tailwind · Three.js · Framer Motion</p>
      </div>
    </footer>
  );
}
