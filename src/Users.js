import React from "react";
const User=(props)=>{
    const {name,price}=props;
    return(
        <div className="User">
         <span>{name}</span>
         <span>{price}</span>
        </div>
    )
}
export default User;