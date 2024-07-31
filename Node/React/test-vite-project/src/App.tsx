// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  //   // items = [];
  // const heading = "List"
  // const handleSelectItem = (item: string) => { console.log(item); }

  // return <div><ListGroup items={items} heading={heading} onSelectItem={handleSelectItem}/></div>
  let [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true) }>Primary</Button>
    </div>
  );
}

export default App;
