function Videos() {
  return (
    <section
      id="videos"
      className="bg-white p-10 border-1 border-slate-300 rounded-lg shadow-xl"
    >
      <h1 className="font-bold text-2xl mb-4">Vídeos</h1>
      <div className="flex flex-column gap-5">
        <article>
          <h2 className="font-bold text-green-700 text-lg">
            Realismo e Naturalismo na Literatura
          </h2>
          <div className="min-[950px]:flex gap-5">
            <iframe
              className="w-full min-w-[50%] "
              src="https://www.youtube.com/embed/pkc2MP-sHT4?si=fVMM0fZr012lF9j_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p>
              O vídeo &quot;Realismo e Naturalismo&quot; do canal Quer Que
              Desenhe? do Descomplica explora as características principais do
              Realismo e Naturalismo na literatura, destacando temas como o
              retrato fiel da sociedade e a crítica social. Com uma abordagem
              dinâmica e ilustrações didáticas, o vídeo explica as diferenças
              entre esses movimentos literários e exemplifica autores e obras
              que marcaram o período. É ideal para estudantes que buscam
              entender esses estilos de forma clara e visual.
            </p>
          </div>
        </article>

        <article>
          <h2 className="font-bold text-green-700 text-lg">Modernismo</h2>
          <div className="min-[950px]:flex gap-5">
            <iframe
              className="w-full min-w-[50%] "
              src="https://www.youtube.com/embed/D8xQel1nhxg?si=voNTo9eEqq_2_NsJ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p>
              O vídeo do Descomplica sobre o Modernismo apresenta as
              características principais do movimento, abordando temas como a
              ruptura com as formas tradicionais, a liberdade criativa, e o foco
              na identidade nacional. Ele explora autores e obras que marcaram o
              período, como a Semana de Arte Moderna de 1922, e discute o
              impacto desse movimento na literatura brasileira. É um conteúdo
              ideal para quem quer entender as ideias e influências que moldaram
              o Modernismo.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Videos;
