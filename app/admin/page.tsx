'use client';

import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import GlassCard from '@/_components/GlassCard';

export default function AdminPage() {
  return (
    <main className="relative min-h-dvh min-h-screen w-full bg-dibase-black" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="relative z-10 mx-auto flex min-h-dvh min-h-screen w-full max-w-md flex-col px-4 pb-12 pt-8">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-dibase-gold-light hover:text-dibase-gold"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Voltar</span>
          </Link>
        </div>

        <motion.div
          className="mb-8 flex items-center gap-3"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dibase-gold/20 backdrop-blur-md border border-dibase-gold-muted">
            <Shield className="h-6 w-6 text-dibase-gold" />
          </div>
          <div>
            <h1 className="font-display text-xl font-semibold text-dibase-gold-light">
              Painel Admin
            </h1>
            <p className="text-sm text-neutral-400">Dibase Hub</p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-3"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.06 } },
            hidden: {},
          }}
        >
          {[
            { label: 'Conteúdo do site', desc: 'Textos e links' },
            { label: 'Produtos', desc: 'Fotos e descrições' },
            { label: 'Configurações', desc: 'Tema e integrações' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            >
              <GlassCard as="div" className="max-w-sm">
                <div className="px-5 py-4">
                  <p className="font-medium text-neutral-100">{item.label}</p>
                  <p className="mt-1 text-sm text-neutral-400">{item.desc}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
