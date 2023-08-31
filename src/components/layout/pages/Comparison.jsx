import React from 'react'
import CompairImg from '../../../../public/images/compare.png'
import { Link } from 'react-router-dom';
import Menu from '../Menu';
function Comparison() {
  return (
  
    <div className="wrapper"> 
    <Menu/>
    <header className="header gray">
       <div className="container">
            <div className="block2">
              <img src={CompairImg} alt="" />
              <h1>Сравнивать пока нечего</h1>
              <p>Вы можете добавлять товары кликая на сердечко , которое находится прямо на карточке товара</p>
            
             <Link to='/'>
             <button>Перейти в главное меню</button></Link>
            </div>
       </div>
    </header>
</div>
  )
}

export default Comparison