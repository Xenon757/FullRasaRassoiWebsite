import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51NtcZSBTjO1dm7X91PniCtY56sCg2CJt7ccccOaHwKX4JCONrUttwrJVDU76DcVohKpniZK0K20J2ADgqKnVmm3200FTT8wFwm";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer({ amount }) {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm amt={amount} />
    </Elements>
  );
}
