import React, {useState} from "react";
import Costs from "./Components/Costs/Costs";
import NewCost from "./Components/NewCost/NewCost";

const Initial__Costs =[
  {
    id: '0',
    date: new Date(2023, 8, 26),
    description: 'Xiaomi',
    amount: 999.99
  },
  {
    id: '1',
    date: new Date(2021, 9, 6),
    description: 'Iphone',
    amount: 1200
  },
  {
    id: '2',
    date: new Date(2020, 10, 1),
    description: 'NoutBook',
    amount: 2000
  },

  ];

const App = () => {
 const [costs, setCosts] = useState(Initial__Costs)
  const addCostHandler = (cost) => {
  setCosts((prevCosts)=> {
    return [cost, ...prevCosts];
  })   
}
  return(
    <div>
      <NewCost onnAddCost = {addCostHandler} />   
      <Costs costs={costs}/>
     </div>
  );
}

export default App;
