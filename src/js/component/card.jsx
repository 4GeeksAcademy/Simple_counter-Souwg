import PropTypes from "prop-types";
import React from "react";


const Card = (props) => {
  return (
    <div
      className="card rounded d-flex justify-content-center align-items-center justify-content-center"
      style={{
        background: "black",
        height: props.heigth ? props.heigth:"9vw",
        width: props.width ? props.width:"9%",
        color: "white",
        fontSize: "4vw",
        fontWeight: "bolder",
        boxShadow: "0px 0px 10px lightgrey",
      }}
    >
      {props.value || props.value === 0? (
        props.value
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          style={{ width: props.clockSize ? props.clockSize : "20%" }}
        >
          <path
            fill="#ffffff"
            d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
          />
        </svg>
      )}
    </div>
  );
};

Card.propTypes = {
    value: PropTypes.string,
    heigth: PropTypes.string,
    width: PropTypes.string,
}

export default Card;