export default function Ingressos() {
  return (
    <div className="grid text-center lg:mt-12 lg:grid-cols-1 sm:w-12/12 md:w-9/12 lg:w-6/12">
      <h1 className="text-4xl font-bold lg:text-6xl">Patrocine</h1>
      <h2 className="text-2lg lg:text-2xl mt-4 mb-4">Orgulho Tech Conf 2024</h2>
      <p className="text-lg lg:text-xl mt-4 text-justify text-green-400">
        Mídia Kit
      </p>
      <p className="text-lg lg:text-xl mt-4 text-justify">
        Faça o download do nosso mídia kit para conhecer as opções de patrocínio
        disponíveis.
      </p>
      <p className="text-lg lg:text-xl mt-4 text-left">
        Preencha o formulário com seus dados, e ao final, faça o download do
        arquivo em PDF no nosso Google Drive.
      </p>
      <br />

      <a
        className="group max-w-fit rounded-lg bg-red-700 border border-red-900 p-2 transition-colors hover:border-red-950 hover:bg-red-700 hover:dark:border-red-950 hover:dark:bg-red-800"
        href="https://forms.gle/xUUKR9pV12aPYnsj8"
        target="_blank"
      >
        <p className="text-base m-2 text-left text-white">Acessar Mídia Kit</p>
      </a>

      <p className="text-sm mt-4 text-left">
        Se você tiver alguma dúvida, entre em contato conosco através do email{" "}
        <a href="mailto:contato@orgulhotech.com.br" className="underline">
          contato@orgulhotech.com.br
        </a>
        .
      </p>
    </div>
  );
}
