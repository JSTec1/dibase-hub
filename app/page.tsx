'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  MessageCircle,
  Mail,
  Instagram,
  FileText,
  Clock,
  Mountain,
} from 'lucide-react';
import GlassCard from '@/_components/GlassCard';
import { BASE_PATH } from '@/lib/basePath';

const stagger = {
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  hidden: {},
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const NUM_PRODUTOS = 6;

export default function Home() {
  return (
    <main className="relative min-h-dvh min-h-screen w-full bg-fixed-mine" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="relative z-10 mx-auto flex min-h-dvh min-h-screen w-full max-w-md flex-col items-center px-4 pb-12 pt-8">
        {/* Logo com animação de flutuação */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 0.5 },
            scale: { duration: 0.4 },
            y: {
              repeat: Infinity,
              duration: 3,
              ease: 'easeInOut',
            },
          }}
        >
          <Image
            src={`${BASE_PATH}/logo.png`}
            alt="Mineração Dibase Areia Brita"
            width={160}
            height={160}
            className="h-40 w-40 rounded-full object-contain drop-shadow-lg ring-2 ring-dibase-gold/40"
            priority
            unoptimized
          />
        </motion.div>

        {/* Botões em cards de vidro com stagger */}
        <motion.nav
          className="flex w-full flex-col items-center gap-3"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} className="w-full max-w-sm">
            <GlassCard as="a" href="https://wa.me/5511999999999">
              <div className="flex items-center gap-4 px-5 py-4 text-left">
                <MessageCircle className="h-6 w-6 shrink-0 text-emerald-400" />
                <span className="font-medium text-neutral-100">WhatsApp Faturamento</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={item} className="w-full max-w-sm">
            <GlassCard as="a" href="mailto:contato@dibase.com.br">
              <div className="flex items-center gap-4 px-5 py-4 text-left">
                <Mail className="h-6 w-6 shrink-0 text-dibase-gold-light" />
                <span className="font-medium text-neutral-100">E-mail</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={item} className="w-full max-w-sm">
            <GlassCard as="a" href="https://instagram.com/dibase">
              <div className="flex items-center gap-4 px-5 py-4 text-left">
                <Instagram className="h-6 w-6 shrink-0 text-pink-400" />
                <span className="font-medium text-neutral-100">Instagram</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={item} className="w-full max-w-sm">
            <GlassCard as="a" href={`${BASE_PATH}/tabela-precos.pdf`}>
              <div className="flex items-center gap-4 px-5 py-4 text-left">
                <FileText className="h-6 w-6 shrink-0 text-dibase-gold-light" />
                <span className="font-medium text-neutral-100">Tabela de Preços (PDF)</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={item} className="w-full max-w-sm">
            <GlassCard as="div">
              <div className="flex items-center gap-4 px-5 py-4 text-left">
                <Clock className="h-6 w-6 shrink-0 text-dibase-gold-muted" />
                <span className="font-medium text-neutral-100">Horário de Funcionamento</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={item} className="w-full max-w-sm">
            <GlassCard as="a" href="#nossos-produtos">
              <div className="flex items-center gap-4 px-5 py-4 text-left">
                <Mountain className="h-6 w-6 shrink-0 text-dibase-gold-light" />
                <span className="font-medium text-neutral-100">Nossos Produtos</span>
              </div>
            </GlassCard>
          </motion.div>
        </motion.nav>

        {/* Galeria de Produtos */}
        <section
          id="nossos-produtos"
          className="mt-16 w-full max-w-md"
        >
          <motion.h2
            className="font-display mb-6 text-center text-xl font-semibold tracking-wide text-dibase-gold-light"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
          >
            Nossos Produtos
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 gap-3 sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            variants={stagger}
          >
            {Array.from({ length: NUM_PRODUTOS }, (_, i) => i + 1).map(
              (num) => (
                <ProdutoCard key={num} index={num} />
              )
            )}
          </motion.div>
        </section>
      </div>
    </main>
  );
}

function ProdutoCard({ index }: { index: number }) {
  const [imgError, setImgError] = useState(false);
  const src = `${BASE_PATH}/produtos/${index}.jpg`;

  return (
    <motion.div variants={item} className="aspect-square w-full">
      <GlassCard className="flex h-full min-h-0 items-center justify-center overflow-hidden p-0">
        <div className="relative h-full w-full">
          {!imgError ? (
            <Image
              src={src}
              alt={`Produto ${index}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 33vw"
              unoptimized
              onError={() => setImgError(true)}
            />
          ) : null}
          {imgError ? (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-[rgba(10,10,10,0.6)] backdrop-blur-sm text-dibase-gold-muted"
              aria-hidden
            >
              <span className="text-3xl" title="Pedra">石</span>
              <span className="text-xs font-medium text-neutral-300">Produto {index}</span>
            </div>
          ) : null}
        </div>
      </GlassCard>
    </motion.div>
  );
}
