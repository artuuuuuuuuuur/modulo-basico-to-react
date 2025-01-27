function Conteudo() {
  return (
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
                voluptatum velit rem officia, distinctio at illo voluptas, et
                laudantium quo laborum saepe obcaecati ut?
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
                voluptatum velit rem officia, distinctio at illo voluptas, et
                laudantium quo laborum saepe obcaecati ut?
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
                voluptatum velit rem officia, distinctio at illo voluptas, et
                laudantium quo laborum saepe obcaecati ut?
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
  );
}

export default Conteudo;
