import Link from "next/link";

export default function Ep06() {
  return (
    <div className="grid text-left lg:mt-12 lg:grid-cols-1 sm:w-12/12 md:w-9/12 lg:w-6/12">
      <h1 className="text-6xl font-bold">Rafa Mores</h1>
      <h2 className="text-white text-sm">CEO da Elu Inovação</h2>
      <h3 className="text-gray-500 text-base">Ep. 06 | 07/05 | 19 PM</h3>
      <p className="text-base mt-4 mb-4 text-left">
      Rafa Mores é uma pessoa não binarie, especialista com + 10 anos de atuação em Inovação, Tecnologia, Diversidade e Inclusão. Formade como Top 1 em Engenharia da Computação na UNICAMP. Recebeu o prêmio de Alune Destaque e foi premiade pela Sociedade Brasileira de Computação em 2014. 
      <br /><br />
      Elu tem experiências multidisciplinares com grandes organizações, unicórnios e impacto, trabalhando com marcas como Itau, B3, QuintoAndar, Loggi, Heinekein, Farm e VW, impactando +12.000 pessoas colaboradoras em 40 grandes organizações do Brasil. 
      <br /><br />
      É também Linkedin Top Voice, considerade uma das 10 vozes LGBTQIAPN+ de impacto na plataforma no ano de 2022, alcançando mais de 1.000.000 de pessoas com seu conteúdo. Também foi destaque no Portal G1, Pequenas Empresas, Grandes Negócios e na Folha de São Paulo.
      </p>
      <div className="video">
        <iframe
          src="https://www.youtube.com/embed/lQ53Y5ocDtE?si=m-boyVSBt343rX5D"
          title="Podcast Orgulho Tech - EP.6"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <br />
      <a
        className="group max-w-fit rounded-lg bg-red-700 border border-red-900 p-2 transition-colors hover:border-red-950 hover:bg-red-700 hover:dark:border-red-950 hover:dark:bg-red-800"
        href="https://www.youtube.com/watch?v=lQ53Y5ocDtE?list=PLndJnupfcnxF0w_rsHFklzSBOTdmcgwAf&index=1"
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
