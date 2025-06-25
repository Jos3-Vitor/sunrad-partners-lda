'use client';

import HeaderGeral from "@/components/HeaderGeral";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import {
  Globe2,
  ShieldCheck,
  Clock,
  Star,
  Users,
  CheckCircle,
  Activity,
  Smile,
} from "lucide-react";

export default function SobrePage() {
  const testimonials = [
    {
      quote:
        "A Sunrad nos ajudou a navegar decisões críticas com precisão e confiança.",
      author: "Maria Silva, CEO da Tech Innovate",
    },
    {
      quote:
        "Profissionalismo, ética e visão estratégica incomparáveis no mercado.",
      author: "João Pereira, Investidor Institucional",
    },
    {
      quote:
        "Atendimento local com expertise global – resultado perfeito para nosso negócio.",
      author: "Ana Costa, Empresária",
    },
  ];

  return (
    <>
    <HeaderGeral />
    <main className="min-h-screen font-sans bg-logo-opaca text-gray-900 z-0">   
    
      {/* Hero com fundo branco */}
      <section className="relative h-[50vh] flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-blue-900">
            Sobre a Sunrad Partners
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-600/90">
            Confiança e estratégia com presença global em consultoria financeira.
          </p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Quem Somos + Missão cards */}
        <section className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="hover:shadow-xl transition-shadow duration-300 border border-green-400/40 rounded-lg">
              <CardHeader className="flex items-center gap-4">
                <Globe2 className="w-8 h-8 opacity-80 text-green-500" />
                <CardTitle className="text-2xl font-bold text-blue-900">
                  Quem Somos
                </CardTitle>
              </CardHeader>
              <Separator className="my-3 border-green-400/30" />
              <CardContent className="text-lg space-y-4 text-blue-900/90">
                <p>
                  A <strong>Sunrad Partners – Wealth & Trade Finance</strong> é uma consultoria financeira internacional
                  com presença em Lisboa, São Paulo, Miami e Bolonha.
                </p>
                <p>
                  Somos especialistas em soluções estratégicas para empresários, gestores de patrimônio e investidores institucionais,
                  combinando visão global e atendimento local com ética e transparência.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="hover:shadow-xl transition-shadow duration-300 border border-blue-400/40 rounded-lg">
              <CardHeader className="flex items-center gap-4">
                <ShieldCheck className="w-8 h-8 opacity-80 text-blue-500" />
                <CardTitle className="text-2xl font-bold text-blue-900">
                  Nossa Missão
                </CardTitle>
              </CardHeader>
              <Separator className="my-3 border-blue-400/30" />
              <CardContent className="text-lg space-y-4 text-blue-900/90">
                <p>
                  Estruturamos soluções financeiras com excelência, promovendo segurança, agilidade e resultados sustentáveis para cada cliente.
                </p>
                <p>
                  Atuamos guiados por princípios inegociáveis de ética, integridade e transparência.
                </p>
                <p>
                  Mais que serviços financeiros, entregamos visão estratégica e confiança para decisões em um cenário global em transformação.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Linha do tempo vertical */}
        <section>
          <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-600/90 drop-shadow-sm">
            Nossa Jornada
          </h2>
          <div className="relative max-w-3xl mx-auto space-y-12 pl-14">
            {/* Linha vertical */}
            <div
              className="absolute top-0 left-9 h-full w-[3px] rounded bg-green-400/30"
              aria-hidden="true"
            />

            {[
              {
                year: "2015",
                title: "Fundação da Sunrad Partners",
                desc: [
                  "Início da nossa jornada com o compromisso de excelência e transparência.",
                ],
                icon: <Clock className="w-6 h-6 text-green-500 opacity-80" />,
              },
              {
                year: "2017",
                title: "Expansão Internacional",
                desc: [
                  "Abrimos escritórios em Lisboa, Miami e Bolonha, ampliando nosso alcance global.",
                ],
                icon: <Globe2 className="w-6 h-6 text-green-500 opacity-80" />,
              },
              {
                year: "2021",
                title: "Novas Parcerias Estratégicas",
                desc: [
                  "Firmamos alianças globais para trazer ainda mais valor aos nossos clientes.",
                ],
                icon: <Users className="w-6 h-6 text-green-500 opacity-80" />,
              },
              {
                year: "2024",
                title: "Liderança em Consultoria Financeira",
                desc: [
                  "Reconhecimento como referência em consultoria para investidores institucionais.",
                ],
                icon: <Star className="w-6 h-6 text-green-500 opacity-80" />,
              },
            ].map(({ year, title, desc, icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative flex items-start gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-green-400/20 rounded-full p-2 shadow-sm">
                    {icon}
                  </div>
                  {i !== 3 && (
                    <div className="flex-1 w-[2px] bg-green-400/20 mt-2"></div>
                  )}
                </div>

                <div>
                  <time
                    className="font-semibold text-green-600 text-lg"
                    aria-label={`Ano ${year}`}
                  >
                    {year}
                  </time>
                  <h3 className="text-2xl font-bold mt-1 text-blue-900/90">
                    {title}
                  </h3>
                  {desc.map((line, idx) => (
                    <p
                      key={idx}
                      className="mt-1 text-blue-900/70 max-w-xl leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Nossos Valores */}
        <section>
          <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-600/90 drop-shadow-sm">
            Nossos Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
            {[
              {
                icon: <CheckCircle className="w-10 h-10 mx-auto mb-4 text-yellow-400 opacity-80" />,
                title: "Ética",
                desc: "Compromisso absoluto com a transparência e responsabilidade em todas as nossas ações.",
              },
              {
                icon: <Activity className="w-10 h-10 mx-auto mb-4 text-teal-400 opacity-80" />,
                title: "Agilidade",
                desc: "Respostas rápidas e soluções eficientes adaptadas a cada desafio.",
              },
              {
                icon: <Smile className="w-10 h-10 mx-auto mb-4 text-green-500 opacity-80" />,
                title: "Confiança",
                desc: "Construímos relações duradouras baseadas em credibilidade e profissionalismo.",
              },
            ].map(({ icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.3 }}
                className="p-6 rounded-lg bg-white shadow-sm cursor-default border border-green-400/20"
              >
                {icon}
                <h3 className="text-xl font-semibold mb-2 text-blue-900/90">
                  {title}
                </h3>
                <p className="text-blue-900/70">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Depoimentos */}
        <section>
          <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-600/90 drop-shadow-sm">
            O que dizem sobre nós
          </h2>
          <div className="max-w-4xl mx-auto space-y-10">
            {testimonials.map(({ quote, author }, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.3 }}
                className="italic border-l-4 pl-6 border-yellow-400 text-blue-900"
              >
                <p>"{quote}"</p>
                <footer className="mt-2 font-semibold text-blue-600/80">
                  — {author}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
</>)
}
