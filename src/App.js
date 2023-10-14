import './App.css';
import {useEffect,useState} from 'react';

function App() {
  const [name,setName]=useState('');
  const [datetime,setDatetime]=useState('');
  const [description,setDescription]=useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(()=>{
    
  gettransactions().then(setTransactions);
  },[]);

  async function gettransactions(){
    const url="http://localhost:4040/api"+"/transactions";
    const response = await fetch(url);
    return await response.json();
  };

  function addnewtransaction(ev){
    ev.preventDefault();
    
   const url="http://localhost:4040/api"+"/transaction";
   const price=name.split(" ")[0];
   fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      price,
      name:name.substring(price.length+1),
      description,
      datetime,
    }),
  }).then((response) => {
    response.json().then((json) => {
        setName("");
        setDatetime("");
        setDescription("");
      console.log("result", json);
    });
  });
  }
  let balance=0;
  transactions.forEach(transaction=>{
    balance+=transaction.price;
  });

  balance=balance.toFixed(2);
  const dollars=balance.split(".")[0];
  const cents=balance.split(".")[1];

  return (
    <main>
      <h1>{dollars}<span>{cents}</span></h1>
      <form onSubmit={addnewtransaction}>
        <div className="basics">
          <input type="text" 
                  value={name} 
                  onChange ={ev=>setName(ev.target.value)}
                  placeholder="+200 New Samsung TV"></input>
          <input value={datetime}
                  onChange ={ev=>setDatetime(ev.target.value)}
                  type="datetime-local"></input>
                
        </div>

        <div className="description">
          <input type="text" 
                  value={description}
                  onChange ={ev=>setDescription(ev.target.value)}
                 placeholder="Decsription"></input>
        </div>

        <button type="submit">Add new Transaction</button>
      
      </form>

      <div className="transactions">
        {transactions.length>0 && transactions.map(transaction => (
          <div className="transaction">
          <div className="left">
            <div className="name">{transaction.name}</div>
            <div className="description"> {transaction.description}</div>
          </div>

          <div className="right">
            <div className={"price "+ (transaction.price<0? 'red':'green')}>
              {transaction.price}</div>
            <div className="datetime">2023-10-14 15:45</div> 
          </div>
        </div>


        ))}
        
      </div>
    </main>
  );
}

export default App;
