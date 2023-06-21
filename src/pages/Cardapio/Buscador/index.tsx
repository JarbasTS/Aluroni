import styles from './Buscador.module.scss';
import { CgSearch as Search } from 'react-icons/cg';

interface BuscadorProps {
  busca: string;
  setBusca: (busca: string) => void;
}

export function Buscador({ busca, setBusca }: BuscadorProps) {
  return (
    <div className={styles.buscador}>
      <input value={busca} onChange={event => setBusca(event.target.value)} />
      <Search size={20} color="#4c4d5e" />
    </div>
  );
}
