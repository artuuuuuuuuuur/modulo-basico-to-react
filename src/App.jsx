import "./App.css";

function App() {
  return (
    <>
      <main className="flex-column flex bg-gray-200 min-[950px]:px-32 py-10 gap-4">
        <section
          id="inicio"
          className="bg-white p-10 border-1 border-slate-300 rounded-lg shadow-xl"
        >
          <h1 className="font-bold text-2xl mb-4">Início</h1>
          <p>
            Bem-vindo à nossa Biblioteca Virtual, o seu espaço online para
            leitura e aprendizado! Aqui, você encontra uma vasta coleção de
            e-books, artigos, revistas e materiais de estudo disponíveis 24/7,
            acessíveis de qualquer dispositivo. Ideal para estudantes,
            profissionais e apaixonados por conhecimento, nosso site oferece
            ferramentas de busca avançada, recomendações personalizadas e
            recursos interativos que facilitam o acesso a conteúdo de qualidade
            e ajudam a potencializar seu aprendizado. Navegue, descubra e
            mergulhe em um universo de conhecimento sem sair de casa!
          </p>
        </section>

        <section
          id="conteudo"
          className="bg-white p-10 border-1 border-slate-300 rounded-lg shadow-xl"
        >
          <h1 className="font-bold text-2xl mb-4">Conteúdo</h1>
          <div className="flex flex-column gap-10">
            <article>
              <h2 className="font-bold text-green-700 text-lg">
                Título do Livro 1
              </h2>
              <div className="flex gap-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/864/864685.png"
                  alt="Imagem do Livro"
                  className="max-w-[8rem] max-h-[8rem] min-w-2rem min-h-[2rem]"
                />
                <div className="w-full flex flex-col justify-between">
                  <p className="mb-2 overflow:hidden">
                    Aqui vai o textinho de descrição do livro 1... Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Illum
                    necessitatibus dignissimos deserunt modi, repellat neque
                    voluptatum velit rem officia, distinctio at illo voluptas,
                    et laudantium quo laborum saepe obcaecati ut?
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-dark w-full mt-auto hover:bg-green-600 border-green-600"
                  >
                    Ler mais...
                  </button>
                </div>
              </div>
            </article>

            <article>
              <h2 className="font-bold text-green-700 text-lg">
                Título do Livro 2
              </h2>
              <div className="flex gap-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/864/864685.png"
                  alt="Imagem do Livro"
                  className="max-w-[8rem] max-h-[8rem] min-w-2rem min-h-[2rem]"
                />
                <div className="w-full flex flex-col justify-between">
                  <p className="mb-2 overflow:hidden">
                    Aqui vai o textinho de descrição do livro 2... Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Illum
                    necessitatibus dignissimos deserunt modi, repellat neque
                    voluptatum velit rem officia, distinctio at illo voluptas,
                    et laudantium quo laborum saepe obcaecati ut?
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-dark w-full mt-auto hover:bg-green-600 border-green-600"
                  >
                    Ler mais...
                  </button>
                </div>
              </div>
            </article>

            <article>
              <h2 className="font-bold text-green-700 text-lg">
                Título do Livro 3
              </h2>
              <div className="flex gap-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/864/864685.png"
                  alt="Imagem do Livro"
                  className="max-w-[8rem] max-h-[8rem] min-w-2rem min-h-[2rem]"
                />
                <div className="w-full flex flex-col justify-between">
                  <p className="mb-2 overflow:hidden">
                    Aqui vai o textinho de descrição do livro 3... Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Illum
                    necessitatibus dignissimos deserunt modi, repellat neque
                    voluptatum velit rem officia, distinctio at illo voluptas,
                    et laudantium quo laborum saepe obcaecati ut?
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-dark w-full mt-auto hover:bg-green-600 border-green-600"
                  >
                    Ler mais...
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

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
                  O vídeo "Realismo e Naturalismo" do canal Quer Que Desenhe? do
                  Descomplica explora as características principais do Realismo
                  e Naturalismo na literatura, destacando temas como o retrato
                  fiel da sociedade e a crítica social. Com uma abordagem
                  dinâmica e ilustrações didáticas, o vídeo explica as
                  diferenças entre esses movimentos literários e exemplifica
                  autores e obras que marcaram o período. É ideal para
                  estudantes que buscam entender esses estilos de forma clara e
                  visual.
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
                  características principais do movimento, abordando temas como
                  a ruptura com as formas tradicionais, a liberdade criativa, e
                  o foco na identidade nacional. Ele explora autores e obras que
                  marcaram o período, como a Semana de Arte Moderna de 1922, e
                  discute o impacto desse movimento na literatura brasileira. É
                  um conteúdo ideal para quem quer entender as ideias e
                  influências que moldaram o Modernismo.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section
          id="autores"
          className="bg-white p-10 border-1 border-slate-300 rounded-lg shadow-xl"
        >
          <h1 className="font-bold text-2xl mb-4">Autores</h1>
          <div className="flex-column gap-5 flex">
            <article>
              <h2 className="font-bold text-green-700 text-lg">
                Nome do Autor
              </h2>
              <div className="min-[950px]:flex gap-5">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAW3c4VeojGKTpXQCtoLQG0_VWjzJwVdAEQ&s"
                  alt="Foto do Autor"
                  className="max-w-[8rem] max-h-[8rem] min-w-2rem min-h-[2rem]"
                />
                <div className="w-full flex flex-col justify-between">
                  <p className="mb-2 overflow:hidden">
                    Descrição sobre o trabalho do autor: Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Sunt neque non
                    dignissimos, ab voluptatum ipsa at placeat perspiciatis
                    excepturi exercitationem, magni libero ad autem ut illo
                    recusandae omnis architecto aut.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-dark w-full mt-auto hover:bg-green-600 border-green-600"
                  >
                    Página do autor na Wikipedia
                  </button>
                </div>
              </div>
            </article>

            <article>
              <h2 className="font-bold text-green-700 text-lg">
                Nome do Autor
              </h2>
              <div className="min-[950px]:flex gap-5">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAW3c4VeojGKTpXQCtoLQG0_VWjzJwVdAEQ&s"
                  alt="Foto do Autor"
                  className="max-w-[8rem] max-h-[8rem] min-w-2rem min-h-[2rem]"
                />
                <div className="w-full flex flex-col justify-between">
                  <p className="mb-2 overflow:hidden">
                    Descrição sobre o trabalho do autor: Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Sunt neque non
                    dignissimos, ab voluptatum ipsa at placeat perspiciatis
                    excepturi exercitationem, magni libero ad autem ut illo
                    recusandae omnis architecto aut.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-dark w-full mt-auto hover:bg-green-600 border-green-600"
                  >
                    Página do autor na Wikipedia
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section
          id="contato"
          className="bg-white p-10 border-1 border-slate-300 rounded-lg shadow-xl"
        >
          <h2 className="font-bold text-2xl mb-4">Contato</h2>
          <form>
            <div className="flex gap-2">
              <label htmlFor="nome" className="w-full">
                Nome:
                <input
                  id="nome"
                  name="nome"
                  className="form-control me-2 flex-grow-1"
                  type="search"
                  placeholder="Ex.: João da Silva"
                  aria-label="Search"
                  required
                />
              </label>

              <label htmlFor="email" className="w-full">
                Email:
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="exemplo@dominio.com"
                  className=" flex-grow-1 form-control me-2"
                  aria-label="Search"
                  required
                />
              </label>
            </div>

            <label htmlFor="assunto" className="flex flex-column">
              Assunto:
              <select
                id="assunto"
                name="assunto"
                required
                className="p-2 border rounded-lg"
              >
                <option value="" disabled selected>
                  Selecione um assunto
                </option>
                <option value="duvida">Dúvida</option>
                <option value="sugestao">Sugestão</option>
                <option value="outro">Outro</option>
              </select>
            </label>
            <br />

            <label htmlFor="mensagem" className="flex-column flex">
              Mensagem:
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Digite sua mensagem"
                required
                className="p-2 border rounded"
              ></textarea>
              <button type="submit" className="btn btn-success w-full mt-2">
                Enviar
              </button>
            </label>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;

