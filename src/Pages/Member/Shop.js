import React, { useState, useEffect } from 'react';
import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import useCode from '../../Code/Code';
import ViewNadd2cart from '../../Components/ViewNadd2cart';

const CardShop = () => {
  const [items, setItems] = useState([]);
  const { 
    cartCount, 
    addToCart, 
    handleViewItem,
    viewItem,
    changeImage,
    currentImg,
    expandedDesc,
    showMoreDesc,
    view,
    setView, url
  } = useCode();

  useEffect(() => {
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setItems(data.data);
        } else {
          console.error("Expected an array but got:", data);
        }
      });
  }, [url]);
   

  return (
    <>
      <NavLogin cartCount={cartCount} />
      <div className="background"></div>
      <div className='container d-flex-wrap justify-content-between align-items-center'>
        {items.map((item, index) => (
          <div key={index} className="card cardshop mb-3" style={{ backgroundColor: "#f8f9fa5a" }}>
            <div className="row g-0">
              <div className="col-md-6">
                <div className="img-container">
                  <img 
                  style={{ width: "100%", height: "200px", objectFit: "contain" }}
                  src={item.main_img}
                  className="btn img-fluid rounded-start p-1"
                  type='button'
                  alt="cardpic"
                  onClick={() => handleViewItem(item)}/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body p-1">
                  <h5 className="card-title btn p-0" style={{ textAlign: 'left', fontWeight: "600" }} onClick={() => handleViewItem(item)}>{item.prod_name.substring(0, 15)}...</h5> <br />
                  <h6>&#8369;{parseFloat(item.price.replace(/,/g, '')).toLocaleString('en-US')}</h6>
                </div>
                <div className='card-footer d-flex'>
                  <button 
                    className='btn btn-primary form-control' 
                    type='button'
                    onClick={() => addToCart(item)}
                    >ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ViewNadd2cart
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

export default CardShop;
