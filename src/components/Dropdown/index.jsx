import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  const [ativar, setAtivar] = useState(true);

  const handleAtivar = () => {
    setAtivar(!ativar);
  };

  return (
    <div className="dropdown">
      <button onClick={handleAtivar} className="dropbtn">
        Categorias
      </button>
      <div
        style={ativar ? { display: "none" } : { display: "grid" }}
        className="content"
      >
        <Link to="/1">Chart1</Link>
        <Link to="/2">Chart2</Link>
        <Link to="/3">Chart3</Link>
        <Link to="/4">Chart4</Link>
        <Link to="/6">Chart6</Link>
        <Link to="/9">Chart9</Link>
        <Link to="/19">Chart19</Link>
      </div>
    </div>
  );
};

export default Dropdown;
