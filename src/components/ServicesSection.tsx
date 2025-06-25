'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ServicesSection() {
  return (
    <section className="py-0 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="grid md:grid-cols-2 min-h-[600px]">
        {/* Lado esquerdo - Vídeo/Imagem */}
        <div className="relative overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src="/videos/hero-section01.mp4"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Lado direito - Conteúdo */}
        <div className="flex flex-col justify-center px-8 md:px-12 py-16">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-teal-300 text-sm font-medium mb-4 uppercase tracking-wider">
              Serviços Especializados
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              DESCUBRA MAIS SOBRE NOSSOS
              <br />
              <span className="text-yellow-400">SERVIÇOS FINANCEIROS</span>
            </h2>
            
            <p className="text-gray-200 text-lg mb-8 leading-relaxed">
              A SunRad transforma estratégias financeiras em soluções práticas para 
              empresários e investidores institucionais. Nossas tecnologias modernas 
              permitem processos seguros e sustentáveis. Nossos serviços:
            </p>

           {/* <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-teal-600/20 rounded-lg border-l-4 border-teal-400 hover:bg-teal-600/30 transition-colors cursor-pointer">
                <span className="text-teal-300 font-semibold">Trade Finance</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-600/20 rounded-lg border-l-4 border-blue-400 hover:bg-blue-600/30 transition-colors cursor-pointer">
                <span className="text-blue-300 font-semibold">Gestão de Patrimônio</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-600/20 rounded-lg border-l-4 border-lime-400 hover:bg-green-600/30 transition-colors cursor-pointer">
                <span className="text-lime-300 font-semibold">Ativos Digitais</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-yellow-600/20 rounded-lg border-l-4 border-yellow-400 hover:bg-yellow-600/30 transition-colors cursor-pointer">
                <span className="text-yellow-300 font-semibold">Consultoria Estratégica</span>
              </div>
            </div>*/}

            <button className="mt-8 px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
              Saiba Mais
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

