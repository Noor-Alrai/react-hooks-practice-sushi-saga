import React , {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"
function SushiContainer({sushiList, setIsEaten}) {
  const [startIndex, setStartIndex] = useState(0);
  const sushiPerPage = 4;

  return (
    <div className="belt">
      {sushiList.slice(startIndex, startIndex + sushiPerPage).map(sushi => {
        return <Sushi key={sushi.id} {...sushi} setIsEaten={()=>setIsEaten(sushi.id, sushi.price)}  />
      })}
      <MoreButton onClick={() => setStartIndex(prevIndex => prevIndex + sushiPerPage)}/>
    </div>
  );
}

export default SushiContainer;
