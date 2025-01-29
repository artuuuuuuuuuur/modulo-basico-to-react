function Nav() {
  return (
    <header className="sticky top-0 bg-green-300 flex flex-col items-center py-2 gap-4 min-[950px]:flex-row md:justify-around md:items-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2784/2784539.png"
        alt="Logotipo da Loja"
        className="h-20"
      />
      <nav className="text-white font-bold ">
        <ul className="min-[950px]:flex gap-5 ">
          <li className="hover:underline">
            <a href="/">Início</a>
          </li>
          <li className="hover:underline">
            <a href="conteudo">Conteúdo</a>
          </li>
          <li className="hover:underline">
            <a href="videos">Vídeos</a>
          </li>
          <li className="hover:underline">
            <a href="autores">Autores</a>
          </li>
          <li className="hover:underline">
            <a href="contato">Contato</a>
          </li>
        </ul>
      </nav>
      <form className="min-[950px]:flex gap-4 flex flex-row" action="/enviar">
        <input
          className="bg-white rounded-md border border-gray-300 px-2"
          type="search"
          placeholder="Ex.: Memórias Póstumas de Brás Cubas"
          aria-label="Search"
          required
        ></input>
        <button type="submit" className="bg-green-200 px-5 py-1 rounded-md hover:bg-green-700 hover:text-white ">
          Pesquisar
        </button>
      </form>
    </header>
  );
}
export default Nav;
