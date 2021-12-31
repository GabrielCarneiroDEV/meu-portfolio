import { Link } from 'react-router-dom';
import './styles.css';

function HeaderNav() {
  return (
    <nav>
      <div className='container-nav'>
        <Link to={'/'} className='unset'>
          <span>Página Inicial</span>
        </Link>

        <Link to={'/Projects'} className='unset'>
          <span>Projetos</span>
        </Link>
        <Link to={'/Contact'} className='unset'>
          <span>Contato</span>
        </Link>
      </div>
      <div className='title'>
        <h1>Gabriel Carneiro - Desenvolvedor Full Stack</h1>
      </div>
    </nav>
  );
}

export default HeaderNav;
