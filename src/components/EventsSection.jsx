import React, { useMemo, useState } from 'react';
import { Calendar, Search, Star, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const sampleEvents = [
  {
    id: 'e1',
    title: 'Artemis II Crew Mission Prep',
    date: '2025-01-12',
    type: 'Mission',
    status: 'upcoming',
    cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'e2',
    title: 'Falcon 9 Starlink Launch',
    date: '2025-02-03',
    type: 'Launch',
    status: 'upcoming',
    cover: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'e3',
    title: 'Total Solar Eclipse Recap',
    date: '2024-04-08',
    type: 'Eclipse',
    status: 'past',
    cover: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200&auto=format&fit=crop',
  },
];

const sampleArticles = [
  {
    id: 'a1',
    title: 'Mapping Dark Matter with Gravitational Lensing',
    tag: 'Cosmology',
    cover: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'a2',
    title: 'Life on Europa? New Clues from Ice Plumes',
    tag: 'Astrobiology',
    cover: 'https://images.unsplash.com/photo-1447433819943-74a20887a81e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'a3',
    title: 'James Webb Reveals Early Galaxies',
    tag: 'JWST',
    cover: 'https://images.unsplash.com/photo-1447433909565-04bfc496fe9d?q=80&w=1200&auto=format&fit=crop',
  },
];

const categories = ['All', 'Mission', 'Launch', 'Eclipse'];

const EventsSection = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [tab, setTab] = useState('Events');

  const filteredEvents = useMemo(() => {
    return sampleEvents.filter((e) => {
      const matchCat = category === 'All' || e.type === category;
      const matchQuery = e.title.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [query, category]);

  const filteredArticles = useMemo(() => {
    return sampleArticles.filter((a) => a.title.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <section id="explore" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex flex-col justify-between gap-6 md:mb-10 md:flex-row md:items-end">
        <div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">Space Events & Articles</h2>
          <p className="mt-2 text-white/70">Track launches and missions, or read the latest discoveries.</p>
        </div>

        {/* Search */}
        <div className="flex w-full flex-col gap-3 md:w-[520px]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search events or articles"
              className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-purple-400/40 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-3 py-1 text-xs transition ${
                  category === c
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_10px_30px_rgba(99,102,241,0.35)]'
                    : 'border border-white/10 bg-white/5 text-white/80 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 inline-flex rounded-lg border border-white/10 bg-white/5 p-1 backdrop-blur">
        {['Events', 'Articles'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm transition ${
              tab === t ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' : 'text-white/80 hover:bg-white/10'
            }`}
          >
            {t === 'Events' ? <Calendar className="h-4 w-4" /> : <Star className="h-4 w-4" />}
            {t}
          </button>
        ))}
      </div>

      {/* Grid */}
      {tab === 'Events' ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((e) => (
            <motion.article
              key={e.id}
              whileHover={{ y: -4, boxShadow: '0 15px 40px rgba(124,58,237,0.25)' }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={e.cover}
                  alt="event cover"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur">
                  {e.type}
                </span>
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 text-base font-semibold text-white">{e.title}</h3>
                <div className="mt-2 flex items-center gap-2 text-xs text-white/70">
                  <Calendar className="h-3.5 w-3.5" /> {new Date(e.date).toDateString()}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className={`text-xs ${e.status === 'upcoming' ? 'text-emerald-400' : 'text-white/70'}`}>
                    {e.status === 'upcoming' ? 'Upcoming' : 'Past'}
                  </span>
                  <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white transition hover:border-purple-400/40 hover:bg-purple-500/10">
                    <Rocket className="h-3.5 w-3.5" /> Details
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((a) => (
            <motion.article
              key={a.id}
              whileHover={{ y: -4, boxShadow: '0 15px 40px rgba(99,102,241,0.25)' }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={a.cover}
                  alt="article cover"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur">
                  {a.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 text-base font-semibold text-white">{a.title}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-white/70">Knowledge Hub</span>
                  <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white transition hover:border-indigo-400/40 hover:bg-indigo-500/10">
                    Read
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
};

export default EventsSection;
