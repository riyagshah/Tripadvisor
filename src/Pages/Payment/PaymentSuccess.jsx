import React from 'react'
import { Link } from "react-router-dom";


const PaymentSuccess = () => {
  return (
    <div>
        <div style={{height:"600px",width:"90%",margin:"auto"}}>
        <img src="http://www.shikharclasses.in/wp-content/uploads/2020/04/PAYMENT-SUCCESS.png" alt="" />

        <Link to="/">
            <button
              style={{
                borderRadius: "18px",
                height: "40px",
                width: "350px",
                marginTop: "0px",
                margin: "35px",
                color: "white",
                backgroundColor: "black",
                border: "none",
                cursor: "pointer",
                // marginLeft:"-50px"
              }}
            >
              <b>Done</b>
            </button>
          </Link>
          </div>
    </div>
  )
}

export default PaymentSuccess;