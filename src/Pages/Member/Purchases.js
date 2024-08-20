import React, { useEffect, useState } from 'react';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import useCode from '../../Code/Code';
import axios from 'axios';

const Purchases = () => {
    const [purch, setPurch] = useState([]);
    const {cartCount, setCartCount, cartUrl, PurchUrl, addToCart} = useCode();

    useEffect(() => {
      fetch(PurchUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setPurch(data);
        });
        axios.get(cartUrl)
          .then((response) => {
            setCartCount(response.data.length);
          })
        
    }, [cartUrl]);

  return (
    <>
    <NavLogin cartCount={cartCount} />
    <div className="background"></div>
    <div className='container'>
      {purch.map((item, index) => (
        <div key={index} className="mb-3" style={{ backgroundColor: "#f8f9fa5a"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={item.main_img} 
              name="main_img" 
              id="main_img" 
              className="img-fluid rounded-start"
               alt="cardpic" 
               style={{width: "100%", objectFit: "cover"}}
               />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" name="Name" id="Name">{item.Name}</h5> <br />
                <h6 className='card-text' name="price" id="price">&#8369; {item.price}</h6>
              </div>
              <div className='card-footer d-flex' style={{ justifyContent: "space-between", alignItems: "center" }}>
                <button className='btn btn-primary' type='submit'  onClick={() => addToCart(item)} >BUY AGAIN</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Footer />
    </>
  )
}

export default Purchases;