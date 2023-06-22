import filtros from './filtros.json';
import styles from './Filtros.module.scss';

type IOpcao = (typeof filtros)[0];

interface FiltrosProps {
  filtro: number | null;
  setFiltro: (filtro: number | null) => void;
}

export default function Filtros({ filtro, setFiltro }: FiltrosProps) {
  function selectFiltro(opcao: IOpcao) {
    if (filtro === opcao.id) return setFiltro(null);
    return setFiltro(opcao.id);
  }

  return (
    <div className={styles.filtros}>
      {filtros.map(opcao => (
        <button
          className={`${styles.filtros__filtro} ${
            filtro === opcao.id ? styles['filtros__filtro--ativo'] : ''
          }`}
          key={opcao.id}
          onClick={() => selectFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}
