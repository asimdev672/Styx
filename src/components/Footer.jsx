import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <footer className="main-footer"> 
      <div className="container-fluid " >
       <div className="row">
         <div className="col-lg-4  col-sm-12">
         <div className="text-center">
         <img src="img/logo.svg" alt="default" />
         </div>
         <p className="mb-5 pb-5 text-lg-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
         </div>
         <div className="col-lg-8  col-sm-12" >
         <div className="row d-flex justify-content-between"  >
           <div className="col-lg-3 col-6 col-sm-2 footer-item">
              <h4>COMPANY</h4>
            <ul>
            <a href=""></a>
              <li> <a href="">News</a></li>
              <li> <a href="">About</a></li>
              <li> <a href="">Careers</a></li>
            </ul>
           </div>
           <div className="col-lg-3  col-6 col-sm-2 footer-item">
           <h4>COMPANY</h4>
            <ul>
            <a href=""></a>
              <li> <a href="">News</a></li>
              <li> <a href="">About</a></li>
              <li> <a href="">Careers</a></li>
            </ul>  </div>
           <div className="col-lg-3 col-6 col-sm-2 footer-item">
           <h4>COMPANY</h4>
            <ul>
            <a href=""></a>
              <li> <a href="">News</a></li>
              <li> <a href="">About</a></li>
              <li> <a href="">Careers</a></li>
            </ul> </div>
           <div className="col-lg-3 col-6 col-sm-2 footer-item">
           <h4>COMPANY</h4>
            <ul>
            <a href=""></a>
              <li> <a href="">News</a></li>
              <li> <a href="">About</a></li>
              <li> <a href="">Careers</a></li>
            </ul></div>
         </div>
         </div>
       </div>
      </div>
    </footer>
<div className="last-p text-center">
    <p className="text-center">©2022 Styx. All Rights Reserved.</p>
</div>
    </>
  );
};

export default Footer;
