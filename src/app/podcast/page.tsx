import Link from "next/link";

export default function Podcast() {
  return (
    <div className="grid text-center lg:mt-12 lg:grid-cols-1 sm:w-12/12 md:w-9/12 lg:w-6/12">
      <h1 className="text-4xl font-bold lg:text-6xl">Podcast Orgulho Tech</h1>
      <p className="text-lg lg:text-xl mt-4 mb-4">
        O primeiro podcast brasileiro sobre tecnologia LGBTQIA+. Episódios ao
        vivo no YouTube com profissionais da área tech e de comunicação.
      </p>
      <Link
        className="group mt-4 rounded-lg border border-gray-700 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-600 hover:dark:bg-neutral-900"
        href="/podcast/ep04"
      >
        <p className="text-3xl mt-4 text-left text-green-400">
          Luiz Ribeiro
          <br />
          <span className="text-white text-sm">
            {" "}
            Gerente de Comunidades do LinkedIn
          </span>
          <br />
          <span className="text-gray-500 text-base">
            Ep. 04 | 08/04
          </span>
        </p>
      </Link>
      <Link
        className="group mt-4 rounded-lg border border-gray-700 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-600 hover:dark:bg-neutral-900"
        href="/podcast/ep03"
      >
        <p className="text-3xl mt-4 text-left text-green-400">
          Felipe dos Anjos
          <br />
          <span className="text-white text-sm">SAP Expert na Accenture</span>
          <br />
          <span className="text-gray-500 text-base">Ep. 03 | 26/01/2024</span>
        </p>
      </Link>
      <Link
        className="group mt-4 rounded-lg border border-gray-700 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-600 hover:dark:bg-neutral-900"
        href="/podcast/ep02"
      >
        <p className="text-3xl mt-4 text-left text-green-400">
          Roberta Arcoverde
          <br />
          <span className="text-white text-sm">Diretora no Stack Overflow</span>
          <br />
          <span className="text-gray-500 text-base">Ep. 02 | 12/01/2024</span>
        </p>
      </Link>
      <Link
        className="group mt-4 rounded-lg border border-gray-700 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-600 hover:dark:bg-neutral-900"
        href="/podcast/ep01"
      >
        <p className="text-3xl mt-4 text-left text-green-400">
          Nathally Souza
          <br />
          <span className="text-white text-sm">Engenheira de Software no Nubank</span>
          <br />
          <span className="text-gray-500 text-base">Ep. 01 | 04/10/2023</span>
        </p>
      </Link>
      <br />
      <a
        className="group w-full rounded-lg bg-red-700 border border-red-900 p-2 transition-colors hover:border-red-950 hover:bg-red-700 hover:dark:border-red-950 hover:dark:bg-red-800"
        href="https://www.youtube.com/playlist?list=PLndJnupfcnxF0w_rsHFklzSBOTdmcgwAf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-base m-2 text-left text-white ">
          Ver playlist completa no YouTube
        </p>
      </a>
    </div>
  );
}
