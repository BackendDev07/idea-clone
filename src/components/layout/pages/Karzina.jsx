import React from 'react'
import KarzinaImg from '../../../../public/images/karzinaImg.png'
import { Link } from 'react-router-dom';
import Menu from '../Menu';
function Karzina() {
  return (
    <div className="wrapper">
      <Menu/>
    <header className="header gray">
       <div className="container">
            <div className="block2">
              <img src={KarzinaImg} alt="" />
              <h1>В корзине пока ничего нет</h1>
              <p>Вы можете добавлять товары кликая на сердечко , которое находится прямо на карточке товара</p>
            
             <Link to='/'>
             <button>Перейти в главное меню</button></Link>
            </div>
       </div>
    </header>
</div>
  )
}

export default Karzina