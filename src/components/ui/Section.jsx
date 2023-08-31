import React from 'react'
import ProductList from '../list/ProductList'

const Section = ({ title, link, children }) => {
  return (
    <>
    <div>
    <span>{title}</span>
    <span>{link}</span>

    </div>
    {children}
    </>
  )
}

export default Section