import React, { useEffect } from 'react';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import LoginCards from '../../Components/LoginCards';
import Carou from '../../Components/Carou';
import useCode from '../../Code/Code';
import ViewNadd2cart from '../../Components/ViewNadd2cart';

function MemberHome() {
  const {cartCount, 
    cartUrl, addToCart, pc, url,
    view, setView, viewItem, 
    changeImage, currentImg,
    expandedDesc, showMoreDesc,
    handleViewItem, phone, setGamingPhone,
    pcImages, gPhoneImages, prod, setProd, addCart, addNew  } = useCode();

  useEffect(() => {
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          const pcImg = data.data.filter(pc);
          const phoneImg = data.data.filter(phone);
          setProd(pcImg);
          setGamingPhone(phoneImg);
        } else {
          console.error("Expected an array but got:", data);
        }
      });
  }, [cartUrl, url]);

  return (
    <>
      <NavLogin cartCount={cartCount} />
      <div className="background"></div>
      <Carou />
      <br />
      <br />
      <LoginCards 
      handleViewItem={handleViewItem} 
      addToCart={addToCart}
      pcImages={pcImages} 
      gPhoneImages={gPhoneImages} 
      prod={prod}
      addNew={addNew}
      />
      <ViewNadd2cart
       viewItem={viewItem} 
       changeImage={changeImage}
       currentImg={currentImg}
       expandedDesc={expandedDesc}
       showMoreDesc={showMoreDesc}
       view={view}
       setView={setView}
       addCart={addCart}
       url={url}
      />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default MemberHome;
