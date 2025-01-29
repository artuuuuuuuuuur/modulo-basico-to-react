function Footer() {
  return (
    <footer className="bg-green-300 flex flex-col gap-5 items-center py-10 text-white absolute bottom-0 w-full">
      <nav className="font-bold flex gap-5 flex-wrap">
        <a className="hover:text-green-800" href="">
          Políticas de Privacidade
        </a>
        <a className="hover:text-green-800" href="">
          Termos de Uso
        </a>
        <a className="hover:text-green-800" href="">
          Ajuda
        </a>
        <a className="hover:text-green-800" href="">
          Rede Social
        </a>
        <a className="hover:text-green-800" href="">
          arturdemaria7@gmail.com
        </a>
        <a className="hover:text-green-800" href="">
          +55 (85) 9-0000-0000
        </a>
      </nav>
      <span>© 2024 Livraria de Livros. Todos os direitos reservados.</span>
    </footer>
  );
}

export default Footer;
