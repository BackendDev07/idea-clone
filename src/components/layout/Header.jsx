import { useState } from 'react';

import {
  FacebookIcon,
  InstagramIcon,
  Logo,
  PercentIcon,
  PhoneIcon,
  TelegramIcon,
  UserIcon,
  LocationIcon,
  CategoryIcon,
  SearchIcon,
  HeartIcon,
  BaskeIcon,
  CompareIcon,
} from '../../assets/icons';
import { Link } from 'react-router-dom'; 
import {
  Drawer,
} from '@chakra-ui/react'

const Header = () => {


  const [open, setOpen] = useState(false);
  const [ placement, setPlacement] = useState('top');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <header className='header' style={{zIndex: 999999}}>
      <div className='header-top'>
        <div className='container'>
          <div className='header-row'>
            <div className="header-top__logo">
              <Logo/>
            </div>
            <div className='header-top__coll'>
              <a href='#' className='header-top__link'>
                О нас
              </a>
              <a href='#' className='header-top__link'>
                Рассрочка
              </a>
              <a href='#' className='header-top__link'>
                Вакансии
              </a>
            </div>
            <div className='header-top__col'>
              <a href='tel:+998712307799' className='header-top__link'>
                <span className='header-icon'>
                  <PhoneIcon />
                </span>
                71 230 77 99
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='header-center'>
        <div className='container'>
          <div className='header-row'>
            <div className='header-center__col'>
              <a href='#' className='header-center__social'>
                <TelegramIcon />
              </a>
              <a href='#' className='header-center__social'>
                <FacebookIcon />
              </a>
              <a href='#' className='header-center__social'>
                <InstagramIcon />
              </a>
            </div>

            <div className='header-center__col'>
              <Link to='/'><a href='#' className='header-center__logo'>
                <Logo />
              </a>
              </Link>
            </div>

            <div className='header-center__col'>
            <Link to={'/Location'}>
              <a href='#' className='header-center__link'>
                <span className='header-center__icon'>
                  <LocationIcon />
                </span>
                Наши локации
              </a>
              </Link>
              <Link to={'/Sales'}>
              <a href='#' className='header-center__link'>
                <span className='header-center__icon'>
                  <PercentIcon />
                </span>
                Акции и скидки
              </a>
              </Link>
       
         <a href='#' className='header-center__link'>
                <span className='header-center__icon'>
                  <UserIcon />
                </span>
                Войти
              </a>
       
            </div>
          </div>
        </div>

        <div className="container">
        <div className="header-end">
          <div className="header-end-button">
            <button  onClick={showDrawer} type="primary"> <span><CategoryIcon /></span> <p>Каталог товаров</p></button>
          </div>

          <div className="header-end-search">
          <input type="search" placeholder='Искать товары...'/>
            <button><SearchIcon /></button>
          </div>
          <div className="header-end-buttons">
            
           <Link to='/favorites'>
           <button>
              <HeartIcon />
              <span>Избранное</span>
            </button>
           </Link>

          <Link to='/karzina'>
          <button>
              <BaskeIcon />
              <span>Корзина</span>
            </button>
          </Link>  
          
         <Link to='/comparison'>
          <button>
              <CompareIcon/>
              <span>Сравнение</span>
            </button>
         </Link>
          </div>
        </div>
        </div>
      </div>

      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </header>
  );
};

export default Header;