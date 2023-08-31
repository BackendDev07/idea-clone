import React from 'react'
import {
         HeartIcon,
         CrownIcon,
         StarIcon,
         BaskeIcon,        
       } from "../../../assets/icons";
         import product2 from "../../../../public/images/product2.png";
function ProductTwo() {
  return (
         <div className="card">
         <div className="header-button">
           <button className="crown">
             <CrownIcon />
           </button>
           <button>
             <HeartIcon />
           </button>
         </div>
         <div className="card-img">
           <img src={product2} alt="" />
         </div>
         <div className="card-menu">
           <h1>
             <span>
               <StarIcon />
             </span>
             (5.0) 0 отзывов
           </h1>
           <h2>5 195 000 сум</h2>
           <h3>
             <span>от</span>266 400 сум
           </h3>
           <p>
             Кондиционер Artel ART-09 <br /> HMDF Grand Белый
           </p>
           <h4>
             Бренд:<span> Artel</span>
           </h4>
         </div>
         <div className="card-button">
           <button>Купить сразу</button>
           <button className="basket">
             <BaskeIcon />
           </button>
         </div>
       </div>
  )
}

export default ProductTwo