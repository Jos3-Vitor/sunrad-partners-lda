import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white py-12 px-6 md:px-20 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo e Descrição */}
        <div>
          <img src="/images/LogoSunRad1_transparent.png" alt="SunRad Logo" className="w-32 mb-4" />
          <p className="text-sm text-gray-300">
            Soluções estratégicas em finanças internacionais, câmbio, ativos digitais e trade finance global.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/">Início</Link></li>
            <li><Link href="/servicos">Serviços</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contato</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              <span>Lisboa, Portugal</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-1" />
              <span>+351 912 345 678</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-1" />
              <span>info@sunrad.pt</span>
            </li>
          </ul>
        </div>

        {/* Newsletter ou redes sociais */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Fique por dentro</h4>
          <p className="text-sm text-gray-300 mb-3">
            Receba atualizações sobre o mercado financeiro internacional.
          </p>
          <input
            type="email"
            placeholder="Seu email"
            className="w-full p-2 rounded bg-white text-black text-sm mb-2"
          />
          <button className="bg-sunrad-sky text-white px-4 py-2 rounded text-sm hover:bg-sunrad-teal transition">
            Inscrever
          </button>
        </div>
      </div>

      {/* Direitos e legal */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SunRad Partners. Todos os direitos reservados.
      </div>
    </footer>
  );
}
