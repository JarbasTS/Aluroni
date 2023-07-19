import { memo, useState } from "react";
import styles from "./Ordenador.module.scss";
import { MdKeyboardArrowUp as ArrowUp, MdKeyboardArrowDown as ArrowDown } from "react-icons/md";
import opcoes from "./opcoes.json";

interface OrdenadorProps {
  ordenador: string;
  setOrdenador: (ordenador: string) => void;
}

function Ordenador({ ordenador, setOrdenador }: OrdenadorProps) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;

  return (
    <button
      className={`${styles.ordenador} ${ordenador !== "" ? styles["ordenador_ativo"] : ""}`}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || "Ordenar Por"}</span>
      {aberto ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
      <div className={`${styles.options} ${aberto === true ? styles["options_ativo"] : ""}`}>
        {opcoes.map(opcoes => (
          <div
            className={styles.option}
            key={opcoes.value}
            onClick={() => setOrdenador(opcoes.value)}
          >
            {opcoes.nome}
          </div>
        ))}
      </div>
    </button>
  );
}

export default memo(Ordenador);
