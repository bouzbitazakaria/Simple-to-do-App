import React from "react";
import "../pages/Acceuil.css";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Acceuil = () => {
  const navigate = useNavigate();
  return (
    <div className="acceuil">
      <div className="title">
        <h1>
          Stay organized and <br /> get things done
        </h1>
        <p>Manage your tasks effeciently and never miss a deadline</p>
        <div className="buttons">
          <button className="Get_started" onClick={() => navigate("/Pricing")}>
            Get Started
          </button>
          <button className="Learn_more">Learn More</button>
        </div>
      </div>
      <MdOutlinePlaylistAddCheckCircle className="Slogon" />
    </div>
  );
};

export default Acceuil;
