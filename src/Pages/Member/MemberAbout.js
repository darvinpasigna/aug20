import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import useCode from '../../Code/Code';
import About from '../../Components/Aboutcontent';
import { useEffect } from 'react';
import axios from 'axios';

function MemberAbout () {
    const {cartCount, setCartCount, cartUrl} = useCode();

    useEffect(() => {
      axios.get(cartUrl)
        .then((response) => {
          setCartCount(response.data.length);
        })
    }, [cartUrl]);
    return (
        <>
        <NavLogin cartCount={cartCount} />
        <div className="background"></div>
        <br />
        <About />
        <br />
        <Footer />
        </>
)}

export default MemberAbout;