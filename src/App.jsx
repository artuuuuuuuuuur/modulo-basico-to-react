import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import IndexPage from "./Components/Pages/IndexPage";
import Contato from "./Components/Pages/Contato";
import Videos from "./Components/Pages/Videos";
import Autores from "./Components/Pages/Autores";
import Conteudo from "./Components/Pages/Conteudo";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main className="bg-gray-200 min-[950px]:px-32 py-10 min-h-[672px]">
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path="conteudo" element={<Conteudo />} />
          <Route path="videos" element={<Videos />} />
          <Route path="autores" element={<Autores />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


