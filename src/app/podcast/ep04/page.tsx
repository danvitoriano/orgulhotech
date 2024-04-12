import Link from "next/link";

export default function Ep04() {
  return (
    <div className="grid text-left lg:mt-12 lg:grid-cols-1 sm:w-12/12 md:w-9/12 lg:w-6/12">
      <h1 className="text-6xl font-bold">Luiz Gustavo Ribeiro</h1>
      <h2 className="text-white text-sm">Gerente de Comunidades do LinkedIn</h2>
      <h3 className="text-gray-500 text-base">Ep. 04 | 08/04</h3>
      <p className="text-base mt-4 mb-4 text-left">
        Luiz Gustavo Ribeiro é jornalista com enorme apreciação por experimentar
        novos desafios. Trabalhou como editor no LinkedIn, na criação e
        curadoria de conteúdos sobre as principais notícias de negócios para
        milhões de usuários no Brasil. Agora, como Creator Manager, seu papel é
        ajudar a comunidade de Creators a alcançar mais sucesso na plataforma.
        <br />
        <br />
        Para o seu TCC, escreveu um livro-reportagem intitulado &apos;Transbordar&apos;
        sobre famílias compostas por pessoas transgêneros, o que reforça sua
        enorme paixão pela escrita e por assuntos relacionados à diversidade e
        inclusão. Seus interesses se dividem entre conteúdo editorial,
        implementação de novas estratégias e assuntos relacionados à tecnologia,
        entretenimento, arte e cultura, esportes e games.
      </p>
      <div className="video">
        <iframe
          src="https://www.youtube.com/embed/jCP1v97aoWE?si=aXG2c6EtJ25Owp81"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <br />
      <a
        className="group max-w-fit rounded-lg bg-red-700 border border-red-900 p-2 transition-colors hover:border-red-950 hover:bg-red-700 hover:dark:border-red-950 hover:dark:bg-red-800"
        href="https://www.youtube.com/watch?v=jCP1v97aoWE&list=PLndJnupfcnxF0w_rsHFklzSBOTdmcgwAf&index=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-base m-2 text-left text-white">
          Assistir no YouTube
        </p>
      </a>
      <a
        href="https://www.youtube.com/playlist?list=PLndJnupfcnxF0w_rsHFklzSBOTdmcgwAf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-base py-8 text-left text-white underline">
          Ver playlist completa no YouTube 🏳️‍🌈
        </p>
      </a>
      <Link
        href="/podcast"
        className="group max-w-fit rounded-lg bg-slate-900 border border-blue-950 p-2 transition-colors hover:border-blue-800 hover:bg-slate-800 hover:dark:border-gray-700 hover:dark:bg-slate-700"
      >
        <p className="text-base p-4 text-left text-white ">
          Voltar para a lista de episódios
        </p>
      </Link>
    </div>
  );
}
