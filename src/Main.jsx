import React, { useEffect, useState } from "react";
import "./Main.css";
import Marquee from "react-fast-marquee";
import img1 from "./Media/img1.png";
import img2 from "./Media/Bandar.png";
import star from "./Media/Star 34.png";
import suf1 from "./Media/_.png";
import twitter from "./Media/Behance.png";
import Telegram from "./Media/Telegram.png";
import img3 from "./Media/img2.png";

const Main = () => {
  return (
    <div className="mainPage">
    
      <div className="sec1">
        <span>Jeffrey Epstein</span>
      </div>
      <div className="sec2">
        <div className="marq">
          <Marquee>
            <div className="content">
              <div className="a1">
                <img src={suf1} />
                <span>Grap The Jeffrey</span>p
                <img src={star} />
              </div>
              <div className="a1">
                <img src={suf1} />
                <span>Grap The Jeffrey</span>p
                <img src={star} />
              </div>
              <div className="a1">
                <img src={suf1} />
                <span>Grap The Jeffrey</span>p
                <img src={star} />
              </div>
              <div className="a1">
                <img src={suf1} />
                <span>Grap The Jeffrey</span>p
                <img src={star} />
              </div>
              <div className="a1">
                <img src={suf1} />
                <span>Grap The Jeffrey</span>p
                <img src={star} />
              </div>
              <div className="a1">
                <img src={suf1} />
                <span>Grap The Jeffrey</span>p
                <img src={star} />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
      <div className="sec3">
        <div className="imagePortion">
          <img src={img1} />
          <img src={img2} />
        </div>
      </div>
      <div className="sec4">
        <div className="marq">
          <Marquee>
            <div className="content">
              <div className="a1">
                <img src={suf1} />
                <span>Grap The Jeffrey</span>
                <img src={star} />
              </div>
              <div className="a1">
                <img src={suf1} />
                <span>Grap The Jeffrey</span>
                <img src={star} />
              </div>
              <div className="a1">
                <img src={suf1} />
                <span>Grap The Jeffrey</span>
                <img src={star} />
              </div>
              <div className="a1">
                <img src={suf1} />
                <span>Grap The Jeffrey</span>
                <img src={star} />
              </div>
              <div className="a1">
                <img src={suf1} />
                <span>Grap The Jeffrey</span>
                <img src={star} />
              </div>
              <div className="a1">
                <img src={suf1} />
                <span>Grap The Jeffrey</span>
                <img src={star} />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
      <div className="sec5">
        <p>Token Address:01xhgjhgd6567672hjhj</p>
        <span>Total Supply : 673,343,43</span>
        <span>Liquidity burnt 🔥 Contract Renounced 🔒</span>
        <button type="button">Swap Now</button>
      </div>
      <div className="sec6">
        <img src={img3} />
        <span>Grap The Jeffrey</span>
        <img src={img3} />
      </div>
      <div className="sec7">
        <p>Discover My Secret</p>
        <div className="boxes">
          <div className="box box-a"></div>
          <div className="box box-b"></div>
          <div className="box box-a"></div>

          <div className="box box-a"></div>
          <div className="box box-b"></div>
          <div className="box box-a"></div>

          <div className="box box-a"></div>
          <div className="box box-b"></div>
          <div className="box box-a"></div>

          <div className="box box-a"></div>
          <div className="box box-b"></div>
          <div className="box box-a"></div>

          <div className="box box-a"></div>
          <div className="box box-b"></div>
          <div className="box box-a"></div>
        </div>
      </div>
      <div className="sec8">
        <img src={Telegram} />
        <img src={twitter} />
      </div>
      <footer>© 2022 Biccas Inc. Copyright and rights reserved</footer>
    </div>
  );
};

export default Main;
