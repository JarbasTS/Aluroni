import { Footer, Header, Menu } from 'Components';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import Sobre from 'pages/Sobre';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <main className="container">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
          <Route path="prato/:id" element={<Prato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
