export default function Ingressos() {
  return (
    <div className="grid text-center lg:mt-12 lg:grid-cols-1 sm:w-12/12 md:w-9/12 lg:w-6/12">
      <h1 className="text-4xl font-bold lg:text-6xl">Voluntárias</h1>
      <h2 className="text-2lg lg:text-2xl mt-4 mb-4">Orgulho Tech Conf 2024</h2>
      <p className="text-lg lg:text-xl mt-4 text-justify text-green-400">
        Como se candidatar?
      </p>
      <p className="text-lg lg:text-xl mt-4 text-justify">
        Faça parte do nosso time de voluntárias e ajude a construir um evento
        incrível! Preencha o formulário e aguarde nosso contato.
      </p>
      <p className="text-lg lg:text-xl mt-4 text-left">
        Não oferecemos ajuda de custo, mas garantimos um ambiente seguro e:
        <ul className="list-disc list-inside">
          <li>Ingresso do evento</li>
          <li>Mais uma convidada</li>
          <li>Brinde</li>
          <li>Alimentação no local</li>
          <li>Acesso ao backstage</li>
          <li>Certificado de Participação</li>
        </ul>
      </p>
      <br />

      <a
        className="group max-w-fit rounded-lg bg-red-700 border border-red-900 p-2 transition-colors hover:border-red-950 hover:bg-red-700 hover:dark:border-red-950 hover:dark:bg-red-800"
        href="https://forms.gle/dZ2RbqDwYoR4k16M7"
        target="_blank"
      >
        <p className="text-base m-2 text-left text-white">Quero ser voluntária</p>
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
