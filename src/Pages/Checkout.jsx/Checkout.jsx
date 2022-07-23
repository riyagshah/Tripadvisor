import React from "react";
import style from "./Checkout.module.css";
import { Link } from "react-router-dom";
import CheckoutNav from ".././Tour_Description/Images/CheckoutNav.png";

const Checkout = () => {
  let checkoutData = JSON.parse(localStorage.getItem("Data"));
  console.log(checkoutData);
  return (
    <div>
      <div>
        {" "}
        <img src={CheckoutNav} alt="" />
      </div>
      <p
        style={{
          textAlign: "left",
          margin: "20px",
          marginLeft: "150px",
          color: "#545454",
          fontSize: "12px",
          marginTop: "10px",
        }}
      >
        {"<"} Back to Cart
      </p>
      <h1
        style={{
          textAlign: "left",
          margin: "20px",
          marginLeft: "150px",
          marginTop: "50px",
        }}
      >
        Secure Checkout
      </h1>
      <div
        style={{
          height: "50px",
          width: "80%",
          backgroundColor: "#eafaf4",
          margin: "auto",
          borderRadius: "10px",
        }}
      >
        <p style={{ textAlign: "left", margin: "20px", padding: "12px" }}>
          Checkout securely - it takes only a few minutes.{" "}
        </p>
      </div>
      <div className={style.main}>
        <div className={style.leftdiv}>
          <p style={{ fontWeight: "700", fontSize: "25px" }}>Contact Details</p>
          <div className="emaildiv" style={{ display: "flex", gap: "90px" }}>
            <div>
              <p style={{ fontWeight: "700" }}>Email *</p>
              <input
                style={{
                  height: "40px",
                  width: "200px",
                  borderRadius: "3px",
                  borderColor: "#e0e0e0",
                }}
                type="text"
              />
            </div>
            <div>
              <p style={{ fontWeight: "700" }}>Phone Number *</p>
              <input
                style={{
                  height: "40px",
                  width: "200px",
                  borderRadius: "3px",
                  borderColor: "#e0e0e0",
                }}
                type="text"
              />
            </div>
          </div>
          <input style={{ marginTop: "20px" }} type="checkbox" />{" "}
          <span>
            Receive text message updates about your booking. Message rates may
            apply.
          </span>
          <p style={{ fontWeight: "700", fontSize: "25px" }}>
            Traveler Details
          </p>
          <p style={{ fontWeight: "700" }}>Lead Traveler</p>
          <div
            className="emaildiv"
            style={{ display: "flex", gap: "90px", marginTop: "-15px" }}
          >
            <div>
              <p style={{ fontWeight: "700" }}> First Name *</p>
              <input
                style={{
                  height: "40px",
                  width: "200px",
                  borderRadius: "3px",
                  borderColor: "#e0e0e0",
                }}
                type="text"
              />
            </div>
            <div>
              <p style={{ fontWeight: "700" }}>Last Name*</p>
              <input
                style={{
                  height: "40px",
                  width: "200px",
                  borderRadius: "3px",
                  borderColor: "#e0e0e0",
                }}
                type="text"
              />
            </div>
          </div>
          <h4>Promo Code</h4>
          <hr style={{ opacity: "0.5", marginTop: "-5px" }} />
          <a style={{ color: "#004f32" }} href="">
            <b> Enter Promo Code </b>
          </a>
          <br />
          <Link to="/Payment">
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
              <b>Next</b>
            </button>
          </Link>
        </div>

        <div className={style.rightdiv} style={{ width: "30%" }}>
          {checkoutData.map((item) => {
            return (
              <div
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  width: "100%",
                }}
              >
                <h3 style={{ textAlign: "left", margin: "20px" }}>
                  Review Order Details
                </h3>
                <div key={item.id} style={{ display: "flex" }}>
                  <div>
                    <div>
                      <img
                        style={{
                          height: "120px",
                          width: "120px",
                          margin: "20px",
                        }}
                        src={item.image}
                        alt=""
                      />
                    </div>
                  </div>

                  <div>
                    <div style={{}}>
                      {" "}
                      <h4 style={{ textAlign: "left", width: "70%" }}>
                        {item.title}
                      </h4>
                    </div>
                    <div
                      className={style.circles}
                      style={{
                        fontWeight: "400",
                        marginTop: "-15px",
                        // border: "1px solid",
                      }}
                    >
                      <i className="fa fa-circle" aria-hidden="true"></i>
                      <i className="fa fa-circle" aria-hidden="true"></i>
                      <i className="fa fa-circle" aria-hidden="true"></i>
                      <i className="fa fa-circle" aria-hidden="true"></i>
                      <i className="fa fa-circle" aria-hidden="true"></i>
                      <p style={{ marginTop: "-3px", marginLeft: "25px" }}>
                        <u
                          style={{
                            color: "black",
                            fontWeight: "400",
                            fontSize: "14px",
                            marginLeft: "-10px",
                          }}
                        >
                          (355 reviews)
                        </u>
                      </p>
                    </div>
                    <p
                      style={{
                        marginTop: "-10px",
                        textAlign: "left",
                        fontSize: "13px",
                        width: "70%",
                      }}
                    >
                      B:Live E-bike Tours - Village - 08:00
                    </p>
                    <p
                      style={{
                        marginTop: "-10px",
                        textAlign: "left",
                        fontSize: "13px",
                        width: "70%",
                      }}
                    >
                      Sunday, July 24, 2022 | 08:00:00
                    </p>
                  </div>
                </div>

                <div style={{}}>
                  <div style={{ display: "flex" }}>
                    {" "}
                    <p
                      style={{
                        marginRight: "105px",
                        width: "100px",
                        textAlign: "left",
                        marginLeft: "50px",
                      }}
                    >
                      Booking Fee
                    </p>{" "}
                    <p>$00.00</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      marginLeft: "50px",
                    }}
                  >
                    {" "}
                    <p
                      style={{
                        marginRight: "105px",
                        width: "100px",
                        textAlign: "left",
                        // marginLeft: "155px",
                        marginTop: "-10px",
                      }}
                    >
                      Subtotal
                    </p>{" "}
                    <p style={{ marginTop: "-10px", textAlign: "right" }}>
                      ${item.price}
                    </p>
                  </div>
                  {/* <hr style={{ marginTop: "-10px" }}></hr> */}
                  <div style={{ display: "flex", marginLeft: "50px" }}>
                    <p
                      style={{
                        marginRight: "105px",
                        width: "100px",
                        textAlign: "left",
                        // marginLeft: "105px",
                        marginTop: "-10px",
                        fontWeight: "700",
                      }}
                    >
                      Total :
                    </p>{" "}
                    <p
                      style={{
                        marginTop: "-10px",
                        fontWeight: "700",
                        textAlign: "right",
                      }}
                    >
                      ${item.price}
                    </p>
                  </div>
                </div>

                {/* <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "70%" }}>Subtotal</p>{" "}
                  <p>${item.price}</p>
                </div>
                <div style={{ display: "flex",width:"100%" }}>
                  <p style={{ marginRight: "280px" }}>Total</p>{" "}
                  <p>${item.price}</p> 

                </div>*/}
              </div>
            );
          })}
          <div
            className={style.rightbotdiv}
            style={{
              width: "100%",
              border: "1px solid black",
              height: "380px",
              textAlign: "left",
              marginTop: "50px",
              borderRadius: "5px",
            }}
          >
            <div>
              <div
                style={{
                  margin: "10px",

                  display: "flex",
                  // height: "200",
                }}
              >
                {/* <img src="" alt="" /> */}
                <i
                  style={{ marginTop: "2rem",marginLeft: "5px", }}
                  class="fa fa-credit-card"
                  aria-hidden="true"
                ></i>

                <div style={{ marginLeft: "20px",textAlign:"left" }}>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      marginBottom: "10px",
                    }}
                  >
                    Lowest price guarantee
                  </p>
                  <p style={{ marginTop: "-10px" }}>
                    Find it cheaper? We'll refund the difference
                  </p>
                </div>
              </div>
              <div
                style={{
                  margin: "10px",
                  marginTop: "-20px",
                  display: "flex",
                  // height: "200",
                }}
              >
                {/* <img src="" alt="" /> */}
                {/* <i class="fa-light fa-lock"></i> */}
                <i
                  style={{ marginTop: "2rem",marginLeft: "5px" }}
                  class="fa fa-lock"
                  aria-hidden="true"
                ></i>

                <div style={{ marginLeft: "25px",textAlign:"left" }}>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      marginBottom: "10px",
                     
                    }}
                  >
                    Privacy protection
                  </p>
                  <p style={{ marginTop: "-10px" }}>
                    We use SSL encryption to keep your data secure
                  </p>
                </div>
              </div>
              <div
                style={{
                  margin: "10px",
                  marginTop: "-20px",
                  display: "flex",
                  // height: "200",
                }}
              >
                <img src="" alt="" />
                <i
                  style={{ marginTop: "2rem",marginLeft: "5px" }}
                  class="fa fa-headphones"
                  aria-hidden="true"
                ></i>

                <div style={{ marginLeft: "20px",textAlign:"left" }}>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      marginBottom: "10px",
                    }}
                  >
                    24/7 global support
                  </p>
                  <p style={{ marginTop: "-10px" }}>
                    Get the answers you need, when you need them
                  </p>
                </div>
              </div>
              <div
                style={{
                  margin: "10px",
                  marginTop: "-20px",
                  display: "flex",
                  // height: "200",
                }}
              >
                {/* <img src="" alt="" /> */}
                <i
                  style={{ marginTop: "2rem", height: "50px",marginLeft: "5px" }}
                  class="fa fa-phone"
                  aria-hidden="true"
                ></i>

                <div style={{ marginLeft: "22px",textAlign:"left" }}>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      marginBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    Give us a call
                  </p>
                  <p
                    style={{
                      marginTop: "-10px",
                      marginLeft: "px",
                      textAlign: "left",
                    }}
                  >
                    We’d be happy to help you out with your booking
                  </p>
                  <p style={{ marginTop: "-10px" }}>
                    {" "}
                    <u> Call now: +1 855 275 5071</u>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
