import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
function Question({ title, info }) {
  const [showInfo, setShowInfo] = useState(true);
  const show = () => {
    setShowInfo(!showInfo);
  };
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={show}>
            {showInfo ? <AiOutlineMinus />:<AiOutlinePlus />}
          
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
}

export default Question;
