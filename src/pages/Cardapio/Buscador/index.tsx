import { memo, useMemo } from "react";
import styles from "./Buscador.module.scss";
import { CgSearch as Search } from "react-icons/cg";

interface BuscadorProps {
  busca: string;
  setBusca: (busca: string) => void;
}

function Buscador({ busca, setBusca }: BuscadorProps) {
  const elemento = useMemo(() => <Search size={20} color="#4c4d5e" />, []);
  return (
    <div className={styles.buscador}>
      <input value={busca} onChange={event => setBusca(event.target.value)} placeholder="Buscar" />
      {elemento}
    </div>
  );
}

export default memo(Buscador);
