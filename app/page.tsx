'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Instagram, FileText, Clock, Mountain } from 'lucide-react';
import GlassCard from '@/_components/GlassCard';
import WhatsAppIcon from '@/_components/WhatsAppIcon';
import { BASE_PATH } from '@/lib/basePath';

const stagger = {
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
  hidden: {},
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const NUM_PRODUTOS = 6;

export default function Home() {
  const [logoError, setLogoError] = useState(false);

  return (
    <main
      className="relative min-h-dvh min-h-screen w-full bg-fixed-mine"
      style={{
        backgroundImage: `linear-gradient(rgba(10,10,10,0.55), rgba(10,10,10,0.55)), url(background.jpg.jpeg)`,
      }}
    >
      <div className="relative z-10 mx-auto flex min-h-dvh min-h-screen w-full max-w-md flex-col items-center px-4 pb-6 pt-5">
        {/* Logo em destaque */}
        <motion.div
          className="mb-5 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -6, 0],
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
          <div className="flex h-40 w-40 items-center justify-center rounded-full p-1 ring-4 ring-[#D4AF37] shadow-lg bg-[rgba(15,15,15,0.9)] sm:h-44 sm:w-44">
            {!logoError ? (
              <Image
                src={BASE_PATH ? `${BASE_PATH}/logo.png.jpeg` : 'logo.png.jpeg'}
                alt="Mineração Dibase Areia e Brita"
                width={176}
                height={176}
                className="h-full w-full rounded-full object-contain"
                priority
                unoptimized
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="font-display text-center text-xl font-semibold text-[#D4AF37]">DIBASE</span>
            )}
          </div>
        </motion.div>

        {/* Botões: mais padding, aspecto clicável */}
        <motion.nav
          className="flex w-full flex-col items-center gap-2"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} className="w-full max-w-sm">
            <GlassCard as="a" href="https://wa.me/5511999999999">
              <div className="flex items-center gap-4 px-6 py-4 text-left">
                <WhatsAppIcon className="h-6 w-6 shrink-0 text-[#D4AF37]" />
                <span className="font-medium text-white">WhatsApp Faturamento</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={item} className="w-full max-w-sm">
            <GlassCard as="a" href="mailto:contato@dibase.com.br">
              <div className="flex items-center gap-4 px-6 py-4 text-left">
                <Mail className="h-6 w-6 shrink-0 text-[#D4AF37]" />
                <span className="font-medium text-white">E-mail</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={item} className="w-full max-w-sm">
            <GlassCard as="a" href="https://instagram.com/dibase">
              <div className="flex items-center gap-4 px-6 py-4 text-left">
                <Instagram className="h-6 w-6 shrink-0 text-[#D4AF37]" />
                <span className="font-medium text-white">Instagram</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={item} className="w-full max-w-sm">
            <GlassCard as="a" href={BASE_PATH ? `${BASE_PATH}/tabela-precos.pdf` : 'tabela-precos.pdf'}>
              <div className="flex items-center gap-4 px-6 py-4 text-left">
                <FileText className="h-6 w-6 shrink-0 text-[#D4AF37]" />
                <span className="font-medium text-white">Tabela de Preços (PDF)</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={item} className="w-full max-w-sm">
            <GlassCard as="div">
              <div className="flex items-center gap-4 px-6 py-4 text-left">
                <Clock className="h-6 w-6 shrink-0 text-[#D4AF37]" />
                <span className="font-medium text-white">Horário de Funcionamento</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={item} className="w-full max-w-sm">
            <GlassCard as="a" href="#nossos-produtos">
              <div className="flex items-center gap-4 px-6 py-4 text-left">
                <Mountain className="h-6 w-6 shrink-0 text-[#D4AF37]" />
                <span className="font-medium text-white">Nossos Produtos</span>
              </div>
            </GlassCard>
          </motion.div>
        </motion.nav>

        {/* Produtos: grid imponente, menos scroll, cabe na tela */}
        <section
          id="nossos-produtos"
          className="mt-6 w-full max-w-md flex-1"
        >
          <motion.h2
            className="font-display mb-4 text-center text-xl font-semibold tracking-wide text-white"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
          >
            Nossos Produtos
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10px' }}
            variants={stagger}
          >
            {Array.from({ length: NUM_PRODUTOS }, (_, i) => i + 1).map(
              (num) => (
                <ProdutoCard key={num} index={num} />
              )
            )}
          </motion.div>
        </section>

        {/* Rodapé JSTec */}
        <footer className="mt-6 w-full shrink-0 py-4 text-center">
          <p className="text-xs text-[#D4AF37]/70">
            © 2026 Mineração Dibase – Todos os direitos reservados.
            <br />
            Desenvolvido por <span className="text-[#D4AF37]/90">JSTec</span>
          </p>
        </footer>
      </div>
    </main>
  );
}

function ProdutoCard({ index }: { index: number }) {
  const [imgError, setImgError] = useState(false);
  const src = BASE_PATH ? `${BASE_PATH}/produtos/${index}.jpg` : `produtos/${index}.jpg`;

  return (
    <motion.div variants={item} className="aspect-square w-full">
      <GlassCard className="flex aspect-square h-full min-h-0 w-full items-center justify-center overflow-hidden rounded-2xl border-white/[0.08] p-0 hover:border-[#D4AF37]">
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
              className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-[rgba(20,20,20,0.8)] backdrop-blur-lg text-white"
              aria-hidden
            >
              <span className="text-2xl text-[#D4AF37]" title="Pedra">石</span>
              <span className="text-xs font-medium text-white/90">Produto {index}</span>
            </div>
          ) : null}
        </div>
      </GlassCard>
    </motion.div>
  );
}
