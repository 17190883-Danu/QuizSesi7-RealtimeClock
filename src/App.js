import React, { useState } from "react";
import './App.css';

function App() {
  function tick() {
    setDate(new Date())
  }
  const [date, setDate] = useState(new Date())

  setInterval(() => tick(), 1000)

  return (
    <div className="App">
      <h1>REALTIME CLOCK</h1>
      <hr />
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  )
}

export default App

// import React from 'react';
// import './App.css';

// class App extends React.Component() {
//   constructor() {
//     super()
//     this.state = {
//       date: new Date()
//     }
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     })
//   }

//   componentDidMounth() {
//     this.timerID = setInterval(() => this.tick(), 1000)
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID)
//   }

//   render() {
//   return (
//     <div className="App">
//       <h1>Realtime CLOCK</h1>
//       <hr />
//       <h1>{this.state.date.toLocaleTimeString()}</h1>
//     </div>
//   );
// }
// }

// export default App;
