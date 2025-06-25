'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo - Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-600 text-sm font-medium mb-4 uppercase tracking-wider">
              Sunrad Partners – Wealth & Trade Finance
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-blue-900">
              CONSULTORIA FINANCEIRA
              <br />
              <span className="text-teal-600">COM ATUAÇÃO INTERNACIONAL</span>
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              A Sunrad Partners – Wealth & Trade Finance é uma empresa de consultoria financeira com atuação internacional, especializada na concepção, análise e execução de soluções estratégicas destinadas a empresários, gestores de patrimônio e investidores institucionais.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Com sede em Lisboa e filiais em São Paulo, Miami e Bolonha, a Sunrad Partners opera com visão global e presença local. Nossa estrutura permite acompanhar clientes em diferentes jurisdições, assegurando alto padrão técnico, independência e absoluto compromisso com a confidencialidade.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Prestamos serviços de elevado valor agregado nas áreas de trade finance, operações de câmbio corporativo, gestão e integração de ativos digitais regulados, validação de instrumentos financeiros (SBLC, BG, MTN) e estruturação de garantias bancárias e fluxos internacionais.
            </p>

            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Conheça Nossa História
            </button>
          </motion.div>

          {/* Lado direito - Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/trade-card.jpg"
                alt="SunRad Partners - Consultoria Financeira"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
            
            {/* Elemento decorativo */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-teal-400 rounded-full opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

