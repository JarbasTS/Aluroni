import { Footer, Menu, Spinner } from "Components";

import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Cardapio = lazy(() => import("pages/Cardapio"));
const Header = lazy(() => import("Components/Header"));
const Inicio = lazy(() => import("pages/Inicio"));
const NotFound = lazy(() => import("pages/NotFound"));
const Prato = lazy(() => import("pages/Prato"));
const Sobre = lazy(() => import("pages/Sobre"));

export default function AppRoutes() {
  return (
    <main className="container">
      <BrowserRouter>
        <Menu />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Inicio />} />
              <Route path="cardapio" element={<Cardapio />} />
              <Route path="sobre" element={<Sobre />} />
            </Route>
            <Route path="prato/:id" element={<Prato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
