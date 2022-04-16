import React from "react";
import './Navbar.css';


const Navbar = () => {
  return (
    <>
    {/*------------------------------------------- navbar------------------------------------------------ */}
      <nav className="navbar d-lg-none navbar-expand-lg nav-baground ">
        <div className="container-fluid">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item nav-itemss">
                <a className="nav-link active" aria-current="page" href="">
                  Home
                </a>
              </li>
              <li className="nav-item nav-itemss">
                <a className="nav-link" href="">
                  STYX Gallery
                </a>
              </li>
              <li className="nav-item nav-itemss">
                <a className="nav-link" href="">
                  ROADMAP
                </a>
              </li>
              <li className="nav-item nav-itemss">
                <a className="nav-link" href="">
                  Work
                </a>
              </li>     
              {/* <li className="nav-item nav-itemss">
                <a className="nav-link" href="#">
                  <img src="img/discord-icon.svg" alt="" />
                </a>
              </li> */}
            </ul>
          </div>
              <img src="img/mb-logo.png" alt="default" className="  mx-auto"/>
              <img src="img/user-image.png" alt="default" className=""/>
              <img src="img/theme.png" alt="default" className="px-2"/>
              <img src="img/shop.png" alt="default" className="  "/>
        </div>
       
      </nav>
    </>
  );
};

export default Navbar;
