import logo from 'assets/logo.svg';
import styles from './Header.module.scss';

export default function Header() {
  const rotas = [
    {
      label: 'Início',
      to: '/'
    },
    {
      label: 'Cardápio',
      to: '/cardapio'
    },
    {
      label: 'Sobre',
      to: '/sobre'
    }
  ];

  return (
    <nav className={styles.menu}>
      <img src={logo} alt="logo do aluroni" />
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <a href={rota.to}>{rota.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
