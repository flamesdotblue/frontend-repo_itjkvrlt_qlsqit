import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, User, ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black" aria-label="Hero">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to enhance contrast (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6 py-6">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <div className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-purple-500 to-indigo-500 shadow-[0_0_30px_rgb(147,51,234,0.6)]">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-wider">Cosmos</span>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur transition hover:border-white/20 hover:bg-white/10">
            <User className="h-4 w-4" />
            Login
          </button>
        </div>

        {/* Headline */}
        <div className="mt-24 max-w-3xl text-white md:mt-32">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Explore the Universe
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent">
              Events, Objects, and Knowledge Hub
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            A cosmic platform for space enthusiasts. Dive into live missions, celestial object explorer, and curated articles from trusted sources.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#explore"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.45)] transition hover:from-purple-500 hover:to-indigo-500"
            >
              Explore Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#objects"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              Browse Objects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
