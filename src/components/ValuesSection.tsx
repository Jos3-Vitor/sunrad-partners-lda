"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const cards = [
  {
    title: "Trade Finance Global",
    description:
      "Estruturação e execução de operações internacionais com segurança e agilidade.",
    image: "/images/trade-card.jpg",
  },
  {
    title: "Confidencialidade & Rigor Técnico",
    description: "Atuação com ética, sigilo absoluto e alto padrão técnico.",
    image: "/images/confidencial-card.jpg",
  },
  {
    title: "Ativos Digitais Regulados",
    description:
      "Integração e validação de ativos digitais em compliance com as exigências globais.",
    image: "/images/ativos-card.jpg",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-24 px-6 text-center bg-gradient-to-b from-gray-50 to-white text-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-900">
          Nossos diferenciais estratégicos
        </h2>
        <p className="text-lg text-blue-700">
          Soluções sob medida para decisões financeiras de alta complexidade,
          com visão global e atuação personalizada.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full text-justify flex flex-col justify-between border-2 border-blue-100 hover:border-blue-300 transition-colors shadow-lg hover:shadow-xl">
              <CardHeader className="flex flex-col items-center gap-4">
                <div className="relative w-full h-48 rounded-md overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
                <CardTitle className="text-xl min-h-[3.5rem] text-center text-blue-900">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-700 text-sm">
                  {card.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
