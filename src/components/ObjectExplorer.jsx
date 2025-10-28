import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const objects = [
  {
    id: 'o1',
    name: 'Jupiter',
    type: 'Gas Giant',
    img: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=1200&auto=format&fit=crop',
    accent: 'from-amber-400 to-pink-500',
  },
  {
    id: 'o2',
    name: 'Andromeda',
    type: 'Galaxy',
    img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
    accent: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'o3',
    name: 'Orion Nebula',
    type: 'Nebula',
    img: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1200&auto=format&fit=crop',
    accent: 'from-fuchsia-500 to-cyan-400',
  },
  {
    id: 'o4',
    name: 'Saturn',
    type: 'Ringed Planet',
    img: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1200&auto=format&fit=crop',
    accent: 'from-yellow-400 to-rose-500',
  },
];

const ObjectExplorer = () => {
  return (
    <section id="objects" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">Object Explorer</h2>
          <p className="mt-2 text-white/70">Glide through celestial objects in a smooth horizontal carousel.</p>
        </div>
      </div>

      <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-2">
        {objects.map((o) => (
          <motion.div
            key={o.id}
            whileHover={{ rotateX: 2, rotateY: -2, y: -4 }}
            className="group relative h-[320px] w-[260px] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
          >
            <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${o.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`} />
            <div className="relative z-10 h-full w-full">
              <img src={o.img} alt={o.name} className="h-2/3 w-full object-cover" />
              <div className="flex h-1/3 flex-col justify-between p-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{o.name}</h3>
                  <p className="text-xs text-white/70">{o.type}</p>
                </div>
                <button className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-white transition hover:border-white/20 hover:bg-black/40">
                  <Star className="h-3.5 w-3.5 text-yellow-300" /> Learn More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ObjectExplorer;
