import React from "react";
const User = (props) => {
  const { name, price,index } = props;
  return (
    <div className="User" style={{transform:`rotate(calc(40deg * ${index}))`}}>
      <div style={{left:`calc(0px*${index/2})`,transform:`rotate(calc(-40deg * ${index}))`}}>
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};
export default User;
