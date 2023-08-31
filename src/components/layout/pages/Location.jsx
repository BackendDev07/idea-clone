import React from 'react'
import map from "../../../../public/images/map.png"
import Menu from '../Menu'


function Location() {
  return (
    <div className='location-main'>
      <Menu/>
      <div className="container">
   <div className="location-flex">
   <div className="location-map">
        <img src={map} alt="" />
      </div>
      <div className="location-menu">
        <h1>Выберите область</h1>
        <select>
          <option>Все области</option>
          <option>	Tashkent</option>
          <option>	Samarkand</option>
          <option>	Namangan</option>
          <option>	Andijan</option>
          <option>	Nukus</option>
          <option>	Fergana</option>
          <option>	Bukhara</option>
          <option>	Qarshi</option>
          <option>	Kokand</option>
          <option>	Margilan</option>
          <option>	Termez</option>
          <option>	Jizzakh</option>
          <option>	Angren</option>
          <option>	Chirchiq</option>
          <option>	Navoiy</option>
          <option>		Urgench</option>
          <option>		Shahrisabz</option>
          <option>	Olmaliq</option>
          <option>		Bekobod</option>

        </select>
        <p>idea Чиланзар</p>
        <p>idea Нурафшан</p>
        <p>idea Юнусабад</p>
        <p>idea Буюк Ипак Йули</p>
        <p>idea Сергели</p>
        <p>idea Магнит</p>
        <p>idea Шахрисабз</p>
        <p>idea Зарафшан</p>
        <p>idea Навои</p>
        <p>idea Беруний</p>
      </div>
   </div>
      </div>
    </div>
  )
}

export default Location