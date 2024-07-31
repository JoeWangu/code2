// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import { Btn } from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false)
  // if (alertVisible == true)
  //   return <Alert></Alert>
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}></Alert>}
      <Btn onClick={() => {
        setAlertVisibility(true)
      }}>Show Alert</Btn>
    </div>
  );
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  // return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>;
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
