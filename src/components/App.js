import React ,{useEffect ,useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const[ sushiList , setSushiList ] = useState([])
 
  const [remainingMoney, setRemainingMoney] = useState(100);
 


  // Calculate remaining money

  useEffect(()=>{
      fetch(`http://localhost:3001/sushis`)
      .then((r) => r.json())
      .then((data) => setSushiList(data))
  }, [])
  function handleSetIsEaten(id, price) {
    if (remainingMoney >= price) {
      const updatedPlate = sushiList.map((sushi) =>
        sushi.id === id ? { ...sushi, isEaten: true } : sushi
      );
      setSushiList(updatedPlate);
      setRemainingMoney((prevMoney) => prevMoney - price);
    } else {
      alert("Not enough money to buy this sushi!");
    }
  }
  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} setIsEaten={handleSetIsEaten}/>
      <Table plates={sushiList} remainingMoney={remainingMoney}  />
    </div>
  );
}

export default App;
