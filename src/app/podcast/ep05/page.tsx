import Link from "next/link";

export default function Ep05() {
  return (
    <div className="grid text-left lg:mt-12 lg:grid-cols-1 sm:w-12/12 md:w-9/12 lg:w-6/12">
      <h1 className="text-6xl font-bold">Renato Paixão</h1>
      <h2 className="text-white text-sm">Senior Product Designer</h2>
      <h3 className="text-gray-500 text-base">Ep. 05 | 19/04 | 11h30 AM</h3>
      <p className="text-base mt-4 mb-4 text-left">
        Especialista em Product Design com mais de 10 anos de experiência na
        construção de equipes, serviços e produtos para startups, consultorias
        de inovação e empresas da Fortune 500.
        <br /><br />
         Ajuda empresas a criar
        experiências intuitivas através de design com foco em impacto, inovação
        e crescimento, permitindo que expandam seus negócios através de uma
        abordagem colaborativa, baseada em dados e experimentação.
      </p>
      <div className="video">
        <iframe
          src="https://www.youtube.com/embed/k05W-tkUFCA?si=kblTJKfQSnocQXOR"
          title="Podcast Orgulho Tech - EP. 5"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <br />
      <a
        className="group max-w-fit rounded-lg bg-red-700 border border-red-900 p-2 transition-colors hover:border-red-950 hover:bg-red-700 hover:dark:border-red-950 hover:dark:bg-red-800"
        href="https://www.youtube.com/watch?v=k05W-tkUFCAlist=PLndJnupfcnxF0w_rsHFklzSBOTdmcgwAf&index=1"
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
