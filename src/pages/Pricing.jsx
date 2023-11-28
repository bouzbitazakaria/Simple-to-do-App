import React from "react";
import Icon1 from "../icons/bulb-dynamic-color.png";
import Icon2 from "../icons/notebook-dynamic-color.png";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./Pricing.css";
const Pricing = () => {
  const navigate = useNavigate()
  return (
    <div className="Pricing_Comp">
      <div className="Pricing_sideBarre">
        <img src={Icon1} alt="" />
        <div>
          <h3>
            Start A Descipline <br />
            <span>life</span>
          </h3>
          <p>
            Choose plan that work best for you , feel free to contact us if you
            need more detail
          </p>
        </div>
        <div className="Pricing_Comment"></div>
      </div>
      <div className="Pricing_prices">
        <div className="FreeTrial">
          <h1>
            Start 14 days <br /> free Pro trial 
          </h1>
          <p>Get started , no credit card required</p>
        </div>
        <div className="Prices">
          <div className="Price_Basic">
            <img src={Icon2} alt="" />
            <h1>Basic</h1>
            <div>
              <h1>FREE</h1>
              <small>/ mounth</small>
            </div>
            <div className="Features">
              <IoCheckmarkDoneCircle className="PB_icon" />
              <p>Daily tasks</p>
            </div>
            <div className="Features">
              <IoCheckmarkDoneCircle className="PB_icon" />
              <p>Weekly progress reports</p>
            </div>
            <button onClick={()=>navigate("/Todo")}>Start Treal</button>
          </div>
          <div className="Price_Pro">
            <img src={Icon2} alt="" />
            <h1>Pro</h1>
            <div>
              <h1>25 $</h1>
              <small>/ mounth</small>
            </div>
            <div className="Features">
              <IoCheckmarkDoneCircle className="PB_icon" />
              <p>Daily tasks</p>
            </div>
            <div className="Features">
              <IoCheckmarkDoneCircle className="PB_icon" />
              <p>Weekly progress reports</p>
            </div>
            <div className="Features">
              <IoCheckmarkDoneCircle className="PB_icon" />
              <p>Unlimited access to premium content</p>
            </div>
            <div className="Features">
              <IoCheckmarkDoneCircle className="PB_icon" />
              <p>Email support</p>
            </div>
            <button>Start Treal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
