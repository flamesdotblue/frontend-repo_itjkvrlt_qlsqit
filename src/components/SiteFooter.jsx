import React from 'react';
import { ExternalLink, Globe, Rocket } from 'lucide-react';

const links = [
  { label: 'NASA APIs', href: 'https://api.nasa.gov/' },
  { label: 'SpaceX', href: 'https://www.spacex.com/' },
  { label: 'ESA', href: 'https://www.esa.int/' },
  { label: 'Hubble', href: 'https://hubblesite.org/' },
];

const socials = [
  { label: 'Website', href: '#', icon: Globe },
];

const SiteFooter = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-2 text-white">
            <div className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-purple-500 to-indigo-500">
              <Rocket className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold">Cosmos</p>
              <p className="text-white/60">Explore. Learn. Wonder.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-white/80 transition hover:text-white"
              >
                {l.label}
                <ExternalLink className="h-4 w-4 opacity-60 transition group-hover:opacity-100" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white/80 transition hover:border-white/20 hover:text-white">
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-white/60">© {new Date().getFullYear()} Cosmos. Educational project concept.</div>
      </div>
    </footer>
  );
};

export default SiteFooter;
