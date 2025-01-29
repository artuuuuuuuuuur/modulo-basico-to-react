function Autores() {
  return (
    <section
      id="autores"
      className="bg-white p-10 border-1 border-slate-300 rounded-lg shadow-xl"
    >
      <h1 className="font-bold text-2xl mb-4">Autores</h1>
      <div className="flex-column min-xl:flex-nowrap flex-wrap gap-5 flex">
        {[...Array(2)].map((e, i) => (
          <article key={i}>
            <h2 className="font-bold text-green-700 text-lg">Nome do Autor</h2>
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
                  className="w-full mt-auto hover:bg-green-600 hover:text-white border-green-600 border rounded-md"
                >
                  Página do autor na Wikipedia
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Autores;
