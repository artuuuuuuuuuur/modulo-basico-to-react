function Contato() {
  return (
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
              className="flex-grow-1 border rounded-md mx-2 px-2 mb-5 border-gray-300"
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
              className=" flex-grow-1 border rounded-md mx-2 px-2 mb-5 border-gray-300"
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
            className="border rounded-md mx-2 px-2 mb-5 border-gray-300"
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
            className="flex-grow-1 w-screen border rounded-md mx-2 px-2 mb-5 border-gray-300 "
          ></textarea>
          <button
            type="submit"
            className="flex-grow-1 border-3 max-h-10 rounded-md mx-2 px-2 mb-5 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
          >
            Enviar
          </button>
        </label>
      </form>
    </section>
  );
}

export default Contato;
