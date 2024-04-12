export default function Ingressos() {
  return (
    <div className="grid text-center lg:mt-12 lg:grid-cols-1 sm:w-12/12 md:w-9/12 lg:w-6/12">
      <h1 className="text-4xl font-bold lg:text-6xl">Ingressos</h1>
      <h2 className="text-2lg lg:text-2xl mt-4 mb-4">
        Orgulho Tech Conf 2024
      </h2>
      <p className="text-lg lg:text-xl mt-4 text-justify text-green-400">
        Valor (único):
      </p>
      <p className="text-lg lg:text-xl mt-4 text-justify">
      ✅ <b>R$ 50,00</b>
      </p>
      <p className="text-lg lg:text-xl mt-4 text-justify text-green-400">
      Forma de pagamento:
      </p>
      <p className="text-lg lg:text-xl mt-4 text-justify">
      ✅ <b>Apenas Pix</b>
      </p>
      <p className="text-lg lg:text-xl mt-4 text-justify text-green-400">
        Sobre o evento:
      </p>
      <p className="text-lg lg:text-xl mt-4 text-justify">
      ✅ <b>Data e hora:</b> Sábado, 1 de junho de 2024. Das 9h às 18h.<br />
      ✅ <b>Local:</b> Teatro FECAP - Av. da Liberdade, 532 - Liberdade, São Paulo/SP. <br />
      <small>Entre as estações São Joaquim e Liberdade do metrô. Estacionamento no local (pago) <br /></small>
      </p>
      <p className="text-lg lg:text-xl mt-4 text-justify text-green-400">
      Formulário de compra:
      </p>
      <p className="text-lg lg:text-xl mt-4 text-left">
        Preencha o formulário com seus dados, e ao final, você deverá realizar o pagamento via Pix.
      </p>
      <br />

      <a
        className="group max-w-fit rounded-lg bg-red-700 border border-red-900 p-2 transition-colors hover:border-red-950 hover:bg-red-700 hover:dark:border-red-950 hover:dark:bg-red-800"
        href="https://forms.gle/oJYZUCBz3xvUsHTq6"
        target="_blank"
      >
        <p className="text-base m-2 text-left text-white">
        Comprar Ingresso
        </p>
      </a>


      
      


      <p className="text-sm mt-4 text-left">
        Se você tiver alguma dúvida, ou se sua empresa deseja patrocinar a Orgulho Tech Conf, entre em contato
        conosco através do email{" "}
        <a href="mailto:contato@orgulhotech.com.br" className="underline">
          contato@orgulhotech.com.br
        </a>
        .
      </p>
    </div>
  );
}
