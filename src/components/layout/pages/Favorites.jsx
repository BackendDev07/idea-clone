import React from "react"
import FavoriteImg from '../../../../public/images/favoritsimg.png'
import { Link } from 'react-router-dom';
import Menu from "../Menu";
function Favorites() {
  
  return (
   <div className="wrapper">
    <Menu/>
          <header className="header gray">
             <div className="container">
                  <div className="block2">
                    <img src={FavoriteImg} alt="" />
                    <h1>В избранном пока ничего нет</h1>
                    <p>Вы можете добавлять товары кликая на сердечко , которое находится прямо на карточке товара</p>
                    <Link to='/'>
             <button>Перейти в главное меню</button></Link>
                  </div>
             </div>
          </header>
   </div>
  )
}

export default Favorites