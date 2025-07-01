"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import HeaderGeral from "@/components/HeaderGeral";
import Footer from "@/components/Footer";

export default function PoliticaPage() {
  const [aberto, setAberto] = useState<string | null>(null);
  const blocos = [
    {
      titulo: "RESPONSABILIDADES",
      conteudo: (
        <>
          <ul className="list-disc pl-6 space-y-1">
            <li> Diretoria.</li>
            <li> Gerência de Tecnologia da Informação – TI.</li>
            <li> Todos os colaboradores envolvidos com o tema.</li>
          </ul>
        </>
      ),
    },
    {
      titulo: "DEFINIÇÕES",
      conteudo: (
        <>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              {" "}
              <strong> Anonimização: </strong>Processo pelo qual um dado
              relativo ao titular não possa ser identificado, considerando a
              utilização de meios técnicos razoáveis e disponíveis na ocasião de
              seu tratamento. Colaboradores: São todos os empregados da SUNRAD,
            </li>
            <li>
              <strong> Colaboradores: </strong>São todos os empregados da
              SUNRAD, incluindo conselheiros e diretores.
            </li>
            <li>
              <strong> Dados pessoais: </strong>Qualquer informação relativa a
              uma pessoa singular identificada ou identificável. É considerada
              identificável uma pessoa singular que possa ser identificada,
              direta ou indiretamente, em especial por referência a um
              identificador, como - por exemplo - um nome, um número de
              identificação, dados de localização, identificadores por via
              eletrônica ou a um ou mais elementos específicos da identidade
              física, fisiológica, genética, mental, econômica, cultural ou
              social dessa pessoa singular.
            </li>
            <li>
              <strong> Encarregado de Dados: </strong>Pessoa indicada pelo
              controlador e operador para atuar como canal de comunicação entre
              o controlador, os titulares dos dados e a Autoridade Nacional de
              Proteção de Dados (ANPD).
            </li>
            <li>
              <strong>
                Relatório de Impacto à Proteção de Dados Pessoais:{" "}
              </strong>
              Documentação do controlador que contém a descrição dos processos
              de tratamento de dados pessoais que podem gerar riscos às
              liberdades civis e aos direitos fundamentais, bem como medidas,
              salvaguardas e mecanismos de mitigação de risco.
            </li>
            <li>
              <strong> Titular: </strong>Pessoa física a quem se referem os
              dados pessoais.
            </li>
            <li>
              <strong> Terceiros: </strong>São todos os prestadores de serviços,
              trabalhadores terceirizados, parceiros comerciais e fornecedores
              com quem a SUNRAD compartilha dados pessoais.
            </li>
          </ul>
        </>
      ),
    },
    {
      titulo: "REGISTRO DAS OPERAÇÕES DE TRATAMENTO DE DADOS PESSOAIS",
      conteudo: (
        <>
          <p className="mb-2">
            Evitamos conflitos de interesse, ou a aparência de conflitos de
            interesse, em todas as nossas operações e atividades..
          </p>
        </>
      ),
    },
    {
      titulo: "REGRAS GERAIS PARA O TRATAMENTO DE DADOS PESSOAIS",
      conteudo: (
        <>
          <p className="mb-2">
            Em toda e qualquer operação de tratamento de dados pessoais, sejam
            eles obtidos diretamente do titular, de terceiros ou de bases
            públicas, deverão ser observadas as seguintes regras:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong> Finalidade: </strong>O manuseio de dados pessoais deverá
              ser realizado unicamente para o cumprimento de uma finalidade
              específica, pré-determinada e informada ao titular.
            </li>
            <li>
              <strong> Necessidade: </strong>O manuseio deverá ser restrito ao
              mínimo de dados pessoais necessário para o alcance da finalidade
              pré-definida.
            </li>
            <li>
              <strong> Não Discriminação: </strong>NO manuseio de dados pessoais
              não poderá ser realizado para fins discriminatórios ilícitos.
            </li>
            <li>
              <strong> Qualidade: </strong>A SUNRAD deverá se atentar para a
              precisão, qualidade e acuracidade dos dados que manuseia.
            </li>
            <li>
              <strong> Transparência: </strong>Deverá ser garantida a
              transparência ao titular sobre o tratamento de seus dados
              pessoais.
            </li>
          </ul>
        </>
      ),
    },
    {
      titulo: "COMPARTILHAMENTO DE DADOS PESSOAIS",
      conteudo: (
        <>
          <p className="mb-2">
            Ao compartilhar dados pessoais com terceiros (enviar ou receber
            dados), deverão ser observadas as regras estabelecidas na Política
            de Compartilhamento de Dados Pessoais, na Política de Privacidade de
            Dados e na Política de Privacidade de Dados de Colaboradores.,
          </p>
        </>
      ),
    },
    {
      titulo: "ARMAZENAMENTO DE DADOS PESSOAIS",
      conteudo: (
        <>
          <p className="mb-2">
            Os documentos que contenham dados pessoais não poderão ser
            armazenados por período superior ao necessário para o cumprimento da
            finalidade pretendida, independentemente do formato utilizado, seja
            físico ou eletrônico.
          </p>
        </>
      ),
    },
    {
      titulo: "DADOS PESSOAIS SENSÍVEIS",
      conteudo: (
        <>
          <p className="mb-2">
            No manuseio de dados pessoais sensíveis, deverão ser observadas as
            hipóteses autorizadoras específicas para tanto. São considerados
            dados pessoais sensíveis aqueles relativos a:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li> Origem racial ou étnica;</li>
            <li> Convicção religiosa;</li>
            <li> Filiação a sindicato;</li>
            <li> Organização de caráter religioso, filosófico ou político;</li>
            <li> Saúde ou à vida sexual;</li>
            <li> Dado genético ou biométrico.</li>
          </ul>
          <p className="mb-2">
            Em caso de dúvidas sobre a classificação de qualquer dado pessoal
            como sensível, o Encarregado de Dados deverá ser consultado.{" "}
          </p>
        </>
      ),
    },
    {
      titulo: "DADOS PESSOAIS DE CRIANÇAS",
      conteudo: (
        <>
          <p className="mb-2">
            O manuseio de dados pessoais de crianças deverá ser realizado:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Em seu melhor interesse, ou seja, com a finalidade de
              beneficiá-las, ainda que de forma indireta;
            </li>
            <li>
              Com transparência, considerando as condições físico-motoras,
              perceptivas, sensoriais, intelectuais e mentais dos destinatários,
              utilizando recursos audiovisuais, quando adequado, para
              proporcionar a informação necessária aos pais ou ao responsável
              legal e adequada ao entendimento da criança.
            </li>
          </ul>
        </>
      ),
    },
    {
      titulo: "HIPÓTESES AUTORIZADORAS PARA O TRATAMENTO DE DADOS PESSOAIS",
      conteudo: (
        <>
          <p className="mb-2">
            Para que uma atividade de tratamento de dados pessoais possa ser
            realizada, ela deve ser fundamentada em uma das hipóteses
            autorizadoras (bases legais) abaixo:
          </p>
          <h3 className="mb-2">
            <strong>CUMPRIMENTO DE OBRIGAÇÃO LEGAL OU REGULATÓRIA</strong>
          </h3>
          <p>
            Existência de lei, norma, decisão judicial ou regulação vigente,
            pela qual o tratamento se torna obrigatório (e não opcional).
            Exemplos:
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li> Arquivamento de notas fiscais;</li>
            <li>
              Manutenção de documentos conforme exigências do Banco Central,
              SUSEP, CVM e B3;
            </li>
            <li> Controle de ponto de colaboradores;</li>
            <li> Envio de dados ao e-Social;</li>
            <li>
              Tratamento com sigilo das informações recebidas do banco de dados
              dos clientes para ações de cobrança ou vendas. Se precisar de mais
              ajustes, fico à disposição!
            </li>
          </ul>
        </>
      ),
    },
    {
      titulo: "EXECUÇÃO DE CONTRATO OU PROCEDIMENTOS PRELIMINARES AO CONTRATO",
      conteudo: (
        <>
          <p className="mb-2">
            Para que uma atividade de tratamento de dados pessoais possa ser
            realizada, ela deve ser fundamentada em uma das hipóteses
            autorizadoras (bases legais) abaixo:
          </p>

          <h3 className="mb-2">
            <strong>CUMPRIMENTO DE OBRIGAÇÃO LEGAL OU REGULATÓRIA</strong>
          </h3>
          <p className="mb-2">
            Existência de lei, norma, decisão judicial ou regulação vigente,
            pela qual o tratamento se torna obrigatório (e não opcional).
            Exemplos:
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li> Arquivamento de notas fiscais;</li>
            <li>
              Manutenção de documentos conforme exigências do Banco Central,
              SUSEP, CVM e B3;
            </li>
            <li> Controle de ponto de colaboradores;</li>
            <li> Envio de dados ao e-Social;</li>
            <li>
              Tratamento com sigilo das informações recebidas do banco de dados
              dos clientes para ações de cobrança ou vendas. Se precisar de mais
              ajustes, fico à disposição!
            </li>
          </ul>
        </>
      ),
    },
    {
      titulo: "EXERCÍCIO REGULAR DE DIREITO",
      conteudo: (
        <>
          <p className="mb-2">
            Para o exercício regular de direitos em processo judicial,
            administrativo ou arbitral, em trâmite ou futuro. Exemplos:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li> Arquivo de processos judiciais;</li>
            <li>
              Arquivo de documentos para defesa em processos trabalhistas;
            </li>
            <li>
              Procurações para atuação em processos judiciais ou
              administrativos;
            </li>
            <li>
              Documentos de comprovação para obtenção de benefícios fiscais.
            </li>
          </ul>
          <p className="mb-2">
            Para o tratamento de dados sensíveis, a legislação prevê que o
            exercício regular de direitos também será aplicável no âmbito
            contratual.
          </p>
        </>
      ),
    },
    {
      titulo: "TUTELA DA SAÚDE",
      conteudo: (
        <>
          <p className="mb-2">
            Para garantir a tutela da saúde, exclusivamente, em procedimento
            realizado por profissionais de saúde, serviços de saúde ou
            autoridade sanitária, sendo vedado qualquer outro uso que desvirtue
            essa finalidade. Exemplos:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li> Procedimentos de Medicina do Trabalho;</li>
            <li> Exames laboratoriais.</li>
          </ul>
        </>
      ),
    },
    {
      titulo: "PROTEÇÃO DA VIDA OU INCOLUMIDADE FÍSICA",
      conteudo: (
        <>
          <p className="mb-2">
            Para garantir a proteção da vida ou incolumidade física do titular
            ou de terceiros, quando em iminente perigo. Exemplo: atendimentos
            médicos de emergência.
          </p>
        </>
      ),
    },
    {
      titulo: "PREVENÇÃO À FRAUDE E À SEGURANÇA DO TITULAR",
      conteudo: (
        <>
          <p className="mb-2">
            Para prevenção à fraude e à segurança do titular, nos processos de
            identificação e autenticação de cadastro em sistemas eletrônicos.
            Exemplos:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li> Fechaduras/catracas biométricas;</li>
            <li>
              Reconhecimento facial em cadastros de acesso, com a finalidade de
              garantir a segurança.
            </li>
          </ul>
          <p className="mb-2">
            Essa base legal se encontra prevista exclusivamente para as
            hipóteses de tratamento de dados pessoais sensíveis.
          </p>
        </>
      ),
    },
    {
      titulo: "LEGÍTIMO INTERESSE",
      conteudo: (
        <>
          <p className="mb-2">
            Para garantir a continuidade da atividade econômica/operação dos
            agentes de tratamento, desde que o titular dos dados tenha
            expectativa quanto à atividade de tratamento. Exemplos:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Estudos e relatórios internos sobre as atividades da Fundação;
            </li>
            <li> Avaliações de desempenho de colaboradores;</li>
            <li>
              Oferta de serviços adicionais a titulares que já são clientes
              (Participantes);
            </li>
            <li> Auditorias internas.</li>
          </ul>
          <p className="mb-2">
            É importante destacar que o tratamento de dados pessoais com base em
            interesses legítimos não será permitido caso ameace ou lesione
            direitos e liberdades fundamentais do titular. Quando o tratamento
            for realizado com base no legítimo interesse, o Encarregado de Dados
            poderá elaborar Relatório de Impacto à Proteção de Dados Pessoais,
            quando necessário.
          </p>
        </>
      ),
    },
    {
      titulo: "CONSENTIMENTO",
      conteudo: (
        <>
          <p className="mb-2">
            Pode ser utilizado para fundamentar qualquer atividade de
            tratamento, desde que seja livre, expresso, informado e inequívoco.
            Contudo, o tratamento realizado com base unicamente no consentimento
            fica restrito à vontade do titular, que pode, a qualquer tempo,
            revogá-lo. Nos casos em que a base legal adequada para o tratamento
            seja o consentimento, deverá ser observado a Política de Uso e
            Gestão do Consentimento.
          </p>
        </>
      ),
    },
    {
      titulo: "RESPONSABILIDADES",
      conteudo: (
        <>
          <p className="mb-2">Compete ao Encarregado de Dados:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Analisar e aprovar ou reprovar as solicitações de suspensão de
              prazo de armazenamento de dados pessoais;
            </li>
            <li>
              Analisar situações em que os dados pessoais de crianças poderão
              ser manuseados sem o consentimento expresso de um dos pais ou
              responsável legal;
            </li>
            <li>
              Elaborar Relatório de Impacto à Proteção de Dados Pessoais, quando
              necessário;
            </li>
            <li>
              Manter o registro das operações de manuseio de dados pessoais,
              contemplando a respectiva base legal.
            </li>
          </ul>
          <p>Compete à área responsável pelo manuseio de dados pessoais:</p>
          <ul>
            <li>
              Observar e atender as regras definidas nesta Política, quando
              aplicáveis.
            </li>
          </ul>
        </>
      ),
    },
    {
      titulo: "PENALIDADES",
      conteudo: (
        <>
          <p className="mb-2">
            O cumprimento de todas as Políticas publicadas é exigido de todos os
            Colaboradores da SUNRAD, constituindo-se em violação a não
            observância aos preceitos nelas descritos, podendo acarretar na
            aplicação de medidas disciplinares, tais como advertência verbal,
            escrita ou até mesmo o desligamento por justa causa, dependendo da
            gravidade da falta cometida.
          </p>
        </>
      ),
    },
    {
      titulo: "DADOS PESSOAIS",
      conteudo: (
        <>
          <p className="mb-2">
            A SUNRAD tem como uma de suas premissas a proteção dos dados
            pessoais de todas as pessoas envolvidas na sua cadeia de atividades.
            O direito à privacidade é uma prioridade e pauta todas as ações e
            políticas da SUNRAD. Dentre as atividades abrangidas por esta
            política, poderá ocorrer o Tratamento/Processamento de dados
            pessoais, ou seja, operações realizadas com dados pessoais, tais
            como a coleta, produção, utilização, acesso, distribuição,
            processamento, arquivamento, eliminação, entre outros. Desta forma,
            qualquer tratamento de dados realizado deverá respeitar as
            disposições gerais desta política, além dos demais documentos
            corporativos e políticas aplicáveis ao tema.
          </p>
        </>
      ),
    },
    {
      titulo: "CONSIDERAÇÕES FINAIS",
      conteudo: (
        <>
          <p className="mb-2">
            Para o esclarecimento de dúvidas, entre em contato com o Encarregado
            pelo Tratamento de dados pessoais da Fundação pelo e-mail:
            info@sunrad.pt. O cumprimento deste Procedimento é de suma
            importância e dever de todos. Em caso de não observância deste
            procedimento, favor reportar imediatamente ao Encarregado pela
            Proteção de Dados, pelo e-mail: info@sunrad.pt. As denúncias de
            violações às Políticas e Procedimentos serão anônimas e a
            não-retaliação será garantida.
          </p>
        </>
      ),
    },
    {
      titulo: "DOCUMENTOS RELACIONADOS",
      conteudo: (
        <>
          <p className="mb-2">
            Normativos internos relacionados ao tema, não se limitando a:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li> Política para Uso e Gestão do Consentimento.</li>
            <li>
              Regimento Interno do Comitê de Privacidade e Proteção de Dados
              Pessoais.
            </li>
            <li> Código de Conduta.</li>
            <li> Norma de Transparência no Tratamento de Dados Pessoais.</li>
            <li>
              Política de Organização de Trabalhos Orientados à Privacidade de
              Dados.
            </li>
            <li> Política de Privacidade.</li>
            <li> Política de Privacidade de Colaboradores.</li>
          </ul>
        </>
      ),
    },
    {
      titulo: "EXCEÇÕES",
      conteudo: (
        <>
          <p className="mb-2">Não se aplica.</p>
        </>
      ),
    },
  ];

  const toggle = (titulo: string) => {
    setAberto((prev) => (prev === titulo ? null : titulo));
  };

  return (
    <>
      <HeaderGeral />
      <main className="min-h-screen bg-logo-opaca px-4 py-12 md:px-12 lg:px-24 text-base leading-relaxed">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Coluna da esquerda */}
          <div className="bg-card/40 p-6 md:p-8 rounded-xl shadow-lg backdrop-blur-md border border-border place-self-start">
            <h1 className="text-2xl font-bold mb-4 text-sunrad-deep-blue">
              POLÍTICA PARA MANUSEIO DE DADOS PESSOAIS
            </h1>
            <h2 className="text-lg font-semibold mb-2 text-sunrad-teal">
              Objetivo
            </h2>
            <p className="mb-4 text-foreground">
              A presente Política para Manuseio de Dados Pessoais (“Política”)
              tem como objetivo determinar as regras internas para o manuseio de
              dados pessoais.
            </p>
            <p className="text-foreground">
              Para os fins desta Política, entende-se por manuseio de dados
              pessoais: Toda operação de tratamento de dados pessoais, como, por
              exemplo, a coleta, recepção, classificação, utilização, acesso,
              reprodução, transmissão, distribuição, processamento,
              arquivamento, armazenamento, eliminação, avaliação ou controle da
              informação, modificação, atualização, comunicação, transferência,
              compartilhamento e extração.
            </p>
          </div>

          {/* Coluna da direita */}
          <div className="bg-card/40 p-6 md:p-8 rounded-xl shadow-lg backdrop-blur-md border border-border">
            {blocos.map(({ titulo, conteudo }) => {
              const ativo = aberto === titulo;
              return (
                <div
                  key={titulo}
                  className={`border-b transition-colors duration-300 ${
                    ativo ? "border-sunrad-sky bg-white/5" : "border-border"
                  } py-4 rounded-md`}
                >
                  <button
                    className="flex justify-between items-center w-full text-left text-sunrad-sky font-semibold"
                    onClick={() => toggle(titulo)}
                  >
                    <span>{titulo}</span>
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        ativo ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {ativo && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-foreground text-sm">
                          {conteudo}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
