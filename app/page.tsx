'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Instagram, FileText, Clock, Mountain } from 'lucide-react';
import GlassCard from '@/_components/GlassCard';
import WhatsAppIcon from '@/_components/WhatsAppIcon';
import Footer from '@/_components/Footer';
import { BASE_PATH } from '@/lib/basePath';

const WHATSAPP_URL = 'https://wa.me/5519999706056?text=Olá,%20gostaria%20de%20falar%20com%20o%20faturamento%20da%20Dibase.';
const INSTAGRAM_URL = 'https://www.instagram.com/mineracaodibasepedreira?igsh=bWFweDFicmV0eW9x';

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
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${BASE_PATH}/background.jpg.jpeg)`,
      }}
    >
      <div className="relative z-10 mx-auto flex min-h-dvh min-h-screen w-full max-w-md flex-col items-center px-4 pb-6 pt-5">
        {/* Logo em destaque – margem menor no mobile para conteúdo subir e vitrine aparecer antes do scroll */}
        <motion.div
          className="mb-3 flex justify-center sm:mb-5"
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
                src={`${BASE_PATH}/logo.png.jpeg`}
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

        {/* Botões: mobile 90% largura centralizados, padding alto (thumb-friendly) */}
        <motion.nav
          className="flex w-[90%] max-w-sm flex-col items-center gap-2 sm:w-full"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} className="w-full">
            <GlassCard as="a" href={WHATSAPP_URL}>
              <div className="flex items-center gap-4 px-5 py-5 sm:px-6 sm:py-4">
                <WhatsAppIcon className="h-6 w-6 shrink-0 text-[#D4AF37]" />
                <span className="flex-1 font-semibold text-white text-center">WhatsApp Faturamento</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={item} className="w-full">
            <GlassCard as="a" href="mailto:contato@dibase.com.br">
              <div className="flex items-center gap-4 px-5 py-5 sm:px-6 sm:py-4">
                <Mail className="h-6 w-6 shrink-0 text-[#D4AF37]" />
                <span className="flex-1 font-semibold text-white text-center">E-mail</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={item} className="w-full">
            <GlassCard as="a" href={INSTAGRAM_URL}>
              <div className="flex items-center gap-4 px-5 py-5 sm:px-6 sm:py-4">
                <Instagram className="h-6 w-6 shrink-0 text-[#D4AF37]" />
                <span className="flex-1 font-semibold text-white text-center">Instagram</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={item} className="w-full">
            <GlassCard as="a" href={`${BASE_PATH}/tabela-precos.pdf`}>
              <div className="flex items-center gap-4 px-5 py-5 sm:px-6 sm:py-4">
                <FileText className="h-6 w-6 shrink-0 text-[#D4AF37]" />
                <span className="flex-1 font-semibold text-white text-center">Tabela de Preços (PDF)</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={item} className="w-full">
            <GlassCard as="div">
              <div className="flex items-center gap-4 px-5 py-5 sm:px-6 sm:py-4">
                <Clock className="h-6 w-6 shrink-0 text-[#D4AF37]" />
                <span className="flex-1 font-semibold text-white text-center">Horário de Funcionamento</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={item} className="w-full">
            <GlassCard as="a" href="#nossos-produtos">
              <div className="flex items-center gap-4 px-5 py-5 sm:px-6 sm:py-4">
                <Mountain className="h-6 w-6 shrink-0 text-[#D4AF37]" />
                <span className="flex-1 font-semibold text-white text-center">Nossos Produtos</span>
              </div>
            </GlassCard>
          </motion.div>
        </motion.nav>

        {/* Produtos: LINHA ÚNICA horizontal com scroll (carrossel) - SEM grid */}
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
            className="flex flex-row gap-3 overflow-x-auto pb-2 scrollbar-hide"
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

        <Footer />
      </div>
    </main>
  );
}

function ProdutoCard({ index }: { index: number }) {
  const [imgError, setImgError] = useState(false);
  const src = `${BASE_PATH}/produtos/${index}.jpg`;

  return (
    <motion.div variants={item} className="shrink-0">
      {/* Card: tamanho fixo (160px) para linha única, imagem real, borda dourada fina, legenda na base */}
      <div className="relative h-[160px] w-[160px] rounded-xl border border-[#D4AF37] overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]">
        {/* Imagem real do produto cobrindo todo o card (background-size: cover) */}
        <div className="relative h-full w-full">
          {!imgError ? (
            <Image
              src={src}
              alt={`Produto ${index}`}
              fill
              className="object-cover"
              sizes="160px"
              unoptimized
              onError={() => setImgError(true)}
            />
          ) : null}
          {imgError ? (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-[rgba(10,10,10,0.95)] text-white"
              aria-hidden
            >
              <span className="text-2xl text-[#D4AF37]" title="Pedra">石</span>
            </div>
          ) : null}
        </div>
        {/* Legenda: tarja preta semi-transparente na parte inferior interna do card */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-3 py-2">
          <p className="text-xs font-medium text-white text-center">Produto {index}</p>
        </div>
      </div>
    </motion.div>
  );
}
