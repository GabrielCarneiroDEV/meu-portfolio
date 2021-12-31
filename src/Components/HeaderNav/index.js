import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '../../Assets/menu.svg';
import CloseIcon from '../../Assets/close.svg';
import './styles.css';

function HeaderNav() {
  const [openMenu, setOpenMenu] = useState(false);


  return (
    <nav>
      <img
        src={openMenu ? CloseIcon : MenuIcon}
        alt=''
        className={`${openMenu ? 'close-icon' : 'menu-icon'}`}
        onClick={() => setOpenMenu(!openMenu)}
      />
      {openMenu && <div className='container-menu'>
      <div className='container-menu-nav'>
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
        </div>}
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
