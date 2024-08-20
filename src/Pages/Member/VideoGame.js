import React, { useState, useEffect } from 'react';
import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import useCode from '../../Code/Code';
import axios from 'axios';
import ViewItem from '../../Components/ViewItem';

const RareCards = () => {
  const {videoGameUrl, addToCart, cartUrl, 
          cartCount, setCartCount,
          setView, view, viewItem,
          expandedDesc, currentImg, handleViewItem,
          changeImage, showMoreDesc } = useCode();
  const [videoGame, setVideoGame] = useState([]);


  useEffect(() => {
    fetch(videoGameUrl)
      .then((response) => response.json())
      .then((data) => {
        setVideoGame(data);
      })
      axios.get(cartUrl)
      .then((response) => {
        setCartCount(response.data.length);
      })
  }, [cartUrl]);


  return (
<>
<NavLogin cartCount={cartCount} />
<div className="background"></div>
<h1 style={{backgroundColor: "rgba(0, 0, 255, 0.733)", padding: "10px"}}>VIDEO GAME</h1>
<div className='container d-flex-wrap justify-content-between align-items-center'>
        {videoGame.slice(0,9).map((item, index) => (
          <div key={index} className="card cardshop mb-3" style={{ backgroundColor: "#f8f9fa5a", width: "30%" }}>
            <div className="row g-0">
              <div className="col-md-6">
              <img 
                  style={{ width: "100%", height: "200px", objectFit: "contain" }}
                  src={item.main_img}
                  className="btn img-fluid rounded-start p-1"
                  type='button'
                  alt="cardpic"
                  onClick={() => handleViewItem(item)}/>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="btn card-title" style={{ textAlign: 'left', fontWeight: "600" }} onClick={() => handleViewItem(item)}>{item.Name}</h5> <br />
                  <h6>&#8369;{parseFloat(item.price.replace(/,/g, '')).toLocaleString('en-US')}</h6>
                </div>
                <div className='card-footer d-flex'>
                  <button 
                  className='btn btn-primary form-control' 
                  type='button' 
                  onClick={() => addToCart(item)}
                  >BUY NOW</button>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ViewItem
              viewItem={viewItem} 
              changeImage={changeImage}
              currentImg={currentImg}
              expandedDesc={expandedDesc}
              showMoreDesc={showMoreDesc}
              view={view}
              setView={setView}
        />
      <Footer />
</>
  );
};

export default RareCards;
