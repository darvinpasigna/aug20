import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import PersonalInfo from '../../Components/PersonInfo';
import useCode from '../../Code/Code';
import axios from 'axios';
import { useEffect } from 'react';

function PersonalProfile () {
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
        <PersonalInfo />
        <br />
        <br />
        <Footer />
        </>
)}

export default PersonalProfile;