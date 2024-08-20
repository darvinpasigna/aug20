import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import ContactContent from '../../Components/ContactContent';
import { useEffect } from 'react';
import axios from 'axios';
import useCode from '../../Code/Code';

function MemberContact () {
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
        <ContactContent />
        <br />
        <Footer />
        </>
)}

export default MemberContact;