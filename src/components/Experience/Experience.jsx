import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>+10</div>
        <span  style={{color: darkMode?'white':''}}>Anos </span>
        <span>Experiencia</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>+100</div>
        <span  style={{color: darkMode?'white':''}}>Aulas </span>
        <span>Completadas</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
        <span  style={{color: darkMode?'white':''}}>colégios </span>
        <span>Trabalhados</span>
      </div>
    </div>
  );
};

export default Experience;
