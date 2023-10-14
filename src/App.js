import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className="basics">
          <input type="text" placeholder="+200 New Samsung TV"></input>
          <input type="datetime-local"></input>
        </div>

        <div className="description">
          <input type="text" placeholder="Decsription"></input>
        </div>

        <button type="submit">Add new Transaction</button>
        
      </form>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name"> New Samsung TV</div>
            <div className="description"> Previous TV was broken</div>
          </div>

          <div className="right">
            <div className="price red">-$200</div>
            <div className="datetime">2023-10-14 15:45</div> 
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name"> Paid from Internship</div>
            <div className="description">Money for work</div>
          </div>

          <div className="right">
            <div className="price green">+$1200</div>
            <div className="datetime">2023-10-15 16:20</div> 
          </div>

        </div>

        <div className="transaction">
          <div className="left">
            <div className="name"> Iphone</div>
            <div className="description"> New Tech </div>
          </div>

          <div className="right">
            <div className="price red">-$1000</div>
            <div className="datetime">2023-10-19 12:00</div> 
          </div>

        </div>
      </div>
    </main>
  );
}

export default App;
