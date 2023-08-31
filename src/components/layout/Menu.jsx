import React from 'react'
import { BaskeIcon, CompareIcon, HeartIcon, HomeIcon, UserIcon } from '../../assets/icons'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>   
       <div className="responsive-mobile-phone">
<div className="container">  
  <div className="menu">
      <Link to={'/'}>
      <button>
      <HomeIcon/>
   
      </button>
      </Link>
      <Link to={'/comparison'}> 
       <button>
      <CompareIcon/>
   
      </button>
      </Link>
    

    <Link to={'/favorites'}>
       <button>
      <HeartIcon/>
    
      </button>
    </Link>
     

<Link to={'/karzina'}>
       <button>
      <BaskeIcon/>

      </button>
</Link>
      


      <button>
      <UserIcon/>

      </button>
      
    </div></div>
  </div>
  </div>
  )
}

export default Menu