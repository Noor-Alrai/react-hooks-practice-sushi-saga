import React ,{useState} from "react";

function Table({ plates, remainingMoney, onAddMoney}) {

 
  const [moneyToAdd, setMoneyToAdd] = useState(0);
  // renders an empty plate for every element in the array
  const emptyPlates = plates.filter((sushi) => sushi.isEaten).map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));
  const handleAddMoney = (e) => {
    e.preventDefault();
    onAddMoney(parseFloat(moneyToAdd));
    setMoneyToAdd(0);
  };
  return (
    <>
      <h1 className="remaining">
        You have: ${remainingMoney} remaining!
      </h1>
      <form onSubmit={handleAddMoney}>
        <label>
          Add Money:
          <input
            type="number"
            step="0.01"
            value={moneyToAdd}
            onChange={(e) => setMoneyToAdd(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
