'use client'

import { motion } from 'framer-motion'

export default function InstitutionalMessageSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">
            Expertise Global. Resultados que Permanecem.
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Atuamos com rigor técnico, sigilo e excelência operacional, orientados por princípios inegociáveis de ética, integridade e transparência. Cada operação é conduzida de forma personalizada, com foco em resultados sustentáveis e alinhamento às melhores práticas do mercado financeiro global.
            </p>
            
            <p>
              Nossa presença em centros estratégicos da Europa, América Latina e América do Norte reflete o compromisso da Sunrad Partners em estar próxima de seus clientes, oferecendo um ambiente exclusivo, seguro e estrategicamente preparado para a tomada de decisões financeiras de alta complexidade.
            </p>
            
            <p className="text-xl font-semibold text-blue-900">
              Mais do que soluções financeiras, entregamos visão estratégica, segurança e agilidade para quem precisa navegar com confiança em um cenário global em constante transformação.
            </p>
            
            <p className="text-lg font-medium text-teal-600">
              Conte com a Sunrad Partners para expandir fronteiras, proteger seu patrimônio e transformar oportunidades em conquistas duradouras.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Fale Conosco
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

