import { useEffect, useState } from "react";
import "./index.css";
import StripeContainer from "./Components/StripeContainer";

function PaymentApp({ orders }) {
  const [showItem, setShowItem] = useState(false);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    setCost(orders[0] * 10 + orders[1] * 20 + orders[2] * 18 + orders[3] * 4);
  }, []);
  return (
    <div className="App">
      <h1 className="my-2">{orders[0] + " PINDI CHOLE"}</h1>
      <h1 className="my-2">{orders[1] + " KAJU KATLI"}</h1>
      <h1 className="my-2">{orders[2] + " RASMALAI"}</h1>
      <h1 className="mt-2 mb-4">{orders[3] + " CHAT PAPDI"}</h1>
      {showItem ? (
        <StripeContainer amount={cost} />
      ) : (
        <>
          <h3 className="my-5">{"$" + cost}</h3>
          <button onClick={() => setShowItem(true)}>Confirm Order</button>
        </>
      )}
    </div>
  );
}

export default PaymentApp;
