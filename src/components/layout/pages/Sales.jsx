import React from 'react'
import action1 from "../../../../public/images/action1.png";
import action2 from "../../../../public/images/action2.png";
import Menu from '../Menu';

function Sales() {
  return (
    <div className='sales-main'>
      <Menu/>
  <div className="container">
  <div className="actions">
          <div className="action-block">
                <img src={action1} alt="" />
                <h1>Техника по 99 000 сум в месяц</h1>
                <p>01.08.2023-13.08.2023</p>
          </div>
          <div className="action-block">
                <img src={action2} alt="" />
                <h1>Техника по 99 000 сум в месяц</h1>
                <p>01.08.2023-13.08.2023</p>
          </div>
          <div className="action-block">
                <img src={action2} alt="" />
                <h1>Техника по 99 000 сум в месяц</h1>
                <p>01.08.2023-13.08.2023</p>
          </div>
        </div>
  </div>
    </div>
  )
}

export default Sales