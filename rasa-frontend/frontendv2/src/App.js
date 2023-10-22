import "./index.css";

import Order from "./Components/Order";
import HomePage from "./Components/HomePage";
import { useState } from "react";
import PaymentApp from "./PaymentApp";
import StripeContainer from "./Components/StripeContainer";

function App() {
  const [makingOrder, setOrder] = useState(false);
  const [showItem, setShowItem] = useState(false);
  return (
    <>
      {!makingOrder ? (
        <HomePage
          makeOrder={() => {
            setOrder(true);
          }}
        ></HomePage>
      ) : (
        <Order></Order>
      )}
    </>
  );
}

export default App;
