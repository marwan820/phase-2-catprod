import React from 'react'
import { Link } from 'react-router-dom'
import "../Navigation/nav.css"



function CustomLink({to,children,...props}){

    const path = window.location.pathname

    return(
    <li className={path === to ? "active":""}>
    <Link to= {to} {...props}>{children}</Link>
    </li>

    )


}

const NavBar = () => {
    

  return (
    <nav className='nav'>
        <Link className='site-title' to="/">Cats R'Us</Link>
        <ul>
        <CustomLink to="/product-form">Product Form</CustomLink>
        <CustomLink to="/cart">Cart</CustomLink>
        </ul>
    </nav>
  )
}

export default NavBar