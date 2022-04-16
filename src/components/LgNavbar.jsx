import React from 'react'
import './Navbar.css';

const LgNavbar = () => {
  return (
    <>
     <nav className="navbar d-none d-lg-block navbar-expand-lg nav-baground ">
        <div className="container-fluid">
          <img src="img/logo.svg" alt="default" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-itemss-list">
              <li className="nav-item nav-itemss">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item   nav-itemss">
                <a className="nav-link " href="">
                  STYX Gallery
                </a>
              </li>
              <li className="nav-item   nav-itemss">
                <a className="nav-link" href="">
                  ROADMAP
                </a>
              </li>
              <li className="nav-item   nav-itemss">
                <a className="nav-link" href="">
                  Work
                </a>
              </li>
              <li className="nav-item   nav-itemss">
                <a className="nav-link" href="">
                  Shop
                </a>
              </li>
              <li className="nav-item   nav-itemss">
                <a className="nav-link" href="#">
                  Character
                </a>
              </li>
              <li className="nav-item   nav-itemss">
                <a className="nav-link" href="">
                  <img src="img/discord-icon.svg" alt="" />
                </a>
              </li>
              <li className="nav-item   nav-itemss">
                <a className="nav-link" href="">
                  <img src="img/telegram-icon.svg" alt="" />
                </a>
              </li>
              <li className="nav-item   nav-itemss">
                <a className="nav-link" href="">
                  <img src="img/github-icon.svg" alt="" />
                </a>
              </li>
              <li className="nav-item   nav-itemss">
                <a className="nav-link" href="">
                  <img src="img/twitter-icon.svg" alt="" />
                </a>
              </li>
              <li className="nav-item   nav-itemss">
                <a className="nav-link" href="">
                  <img src="img/medium-icon.svg" alt="" />
                </a>
              </li>
              <li class="nav-item dropdown dropdown-itemss">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="img/user-image.png" alt="default" className="ms-3"/> Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="">
                      Another action
                    </a>
                  </li>
                 
                  <li>
                    <a class="dropdown-item" href="">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <button className="btn btn-primary mx-2">Connect Wallet</button>
              <img src="img/shop.png" alt="default" className="ms-1"/>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default LgNavbar
