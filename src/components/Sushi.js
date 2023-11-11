import React from "react";

function Sushi({id, name ,image , price , isEaten, setIsEaten }) {


  function handleEatenClick(){
    if (!isEaten) {
      setIsEaten(id, price);
    }
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatenClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? <p>has been eaten </p>: (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
