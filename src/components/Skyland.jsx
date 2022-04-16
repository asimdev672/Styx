import React from "react";
import "./Skyland.css";
import Card from "./Card";
const Skyland = () => {
  return (
    <>
      <section className="main-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="sidebar d-none d-lg-block d-md-block mt-5 mb-2">
                <div>
                  <h2 className="sidebar-heading">SHOP</h2>
                </div>
                <div>
                  <p className="sidebar-heading">FOR SALE</p>
                </div>
                <div className="sidebar-item">
                  <p>ALL</p>
                </div>
                <div className="d-flex sidebar-item">
                  <p>
                    LANDS<span>(222)</span>
                  </p>
                </div>
                <div className="d-flex sidebar-item">
                  <p>
                    ENTITES<span>222</span>
                  </p>
                </div>
                <div className="d-flex sidebar-item">
                  <p>
                    EQUIPMENT<span>222</span>
                  </p>
                </div>
                <div className="d-flex sidebar-item">
                  <p>
                    WEARABLE<span>222</span>
                  </p>
                </div>
                <div className="d-flex sidebar-item">
                  <p>
                    ART<span>222</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-9" >
              <div className="row">
                <div className="main-styxland mt-5 mb-2 ">
                  <div className="d-lg-flex justify-content-between first-div">
                    <div>
                      <h3>
                        Styx LAND <span>(42223)</span>
                      </h3>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <img
                          src="img/search-icon.svg"
                          alt="default"
                          className="d-none "
                        />
                        <label className="px-2">Search</label>
                        <input
                          type="search"
                          placeholder="search"
                          className="input "
                        />
                      </div>
                      <div>
                        <label className="px-2">Sort by</label>
                        <select className="selectbox">
                          <option value="">Newest</option>
                          <option value="">One</option>
                          <option value="">Two</option>
                          <option value="">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid">
                  <div className="row">
                    <Card/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skyland;
