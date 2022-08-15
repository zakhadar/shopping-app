import React from 'react'
import '../css/header.css'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Dealerz.</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#" className="call-center">Call Center</a></li>
            <li><a href="#" className="shipping-returns">Shipping & Returns</a></li>
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-default navbar-secondary">
        <div className="container">
        <ul className="nav navbar-nav">
            <li><a href="#">Shop</a></li>
            <li><a href="#">Promo</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <form className="navbar-form navbar-left" action="/">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search what you need" name="search" />
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <i className="glyphicon glyphicon-search"></i>
                </button>
              </div>
            </div>
          </form>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#" className='shortlisted'></a></li>
            <li><a href="#" className='cart'></a></li>
            <li><a href="#" className='user'></a></li>
            <li><a href="#" className='notification'></a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header;