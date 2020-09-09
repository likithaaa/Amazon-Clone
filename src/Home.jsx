import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
            id="12345678"
            title="The Lean Startup"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Blue)"
            price={118.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61aT8jl8THL._AC_SL1001_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="84264957"
            title="MYNT3D Professional Printing 3D Pen with OLED Display"
            price={59.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71weGpY6ZTL._SL1000_.jpg"
            rating={3}
          />
          <Product
            id="59285730"
            title="Echo Dot (3rd Gen) - Smart speaker with clock and Alexa - Sandstone"
            price={54.99}
            image="https://www.powerplanetonline.com/cdnassets/amazon_echo_dot-3_gen_con_reloj_gris_claro_altavoz_inteligente_alexa_01_l.jpg"
            rating={5}
          />
          <Product
            id="84610824"
            title="Ergonomic Office Chair PC Gaming Chair Desk Chair Executive PU Leather Computer Chair Lumbar Support with Footrest Modern Task Rolling Swivel Chair for Women, Men(White)& VGA port),Black"
            price={139.99}
            image="https://images-na.ssl-images-amazon.com/images/I/611jFd4qtaL._AC_SX522_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="38562937"
            title='AOC AGON AG493UCX 49" Curved Immersive Gaming Monitor, Dual QHD 5120x1440 @ 120Hz, VA Panel, 1ms 120Hz Adaptive-Sync, 121% sRGB, Height Adjustable, 4-Yr Zero Dead Pixels Guarantee,Black/Silver'
            price={999.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71IXyLtFzpL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
