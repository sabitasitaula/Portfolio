import React from "react";

function Icon({icon, onClick}) {
  return (
    <div>
      <div>
        <i className={icon} onClick={onClick}></i>
      </div>
    </div>
  );
}

export default Icon;
