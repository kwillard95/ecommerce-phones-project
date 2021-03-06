import React, { Component } from 'react';
import { PayPalButton } from "react-paypal-button-v2";

 
export default class Example extends Component {
  render() {
    return (
      <div className="mt-1 float-right" style={{width: '200px'}}>
      <PayPalButton
        amount={this.props.total}
        style = {{height: 30}}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
 
          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID
            })
          });
        }}
      />
      </div>
    );
  }
}