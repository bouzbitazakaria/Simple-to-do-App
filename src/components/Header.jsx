import React from 'react';
import { SiTodoist } from "react-icons/si";
import '../pages/Acceuil.css'
import { Link,useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()

  return (
    <header>
      <div className='logo' >
        <div className='logo_icon'><SiTodoist onClick={()=>navigate("/")} /></div>
        <div className='brand_name'>To Do </div>
      </div>
      <div className='links'>
        <Link to="/Features">Features</Link>
        <Link to="/Pricing">Pricing</Link>
      </div>
      <button className='btn_signUp' onClick={()=>navigate("Todo")}>Free Trial </button>
    </header>
  );
}

export default Header;
