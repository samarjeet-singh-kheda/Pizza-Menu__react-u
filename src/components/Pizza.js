import React from "react";

function Pizza({ pizza: { soldOut, photoName, name, ingredients, price } }) {
  // if (soldOut) return null;

  return (
    <>
      <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
        <img src={`${photoName}`} alt={`${name}`} />
        <div>
          <h3>{name}</h3>
          <p>{ingredients}</p>
          <span>{soldOut ? "SOLD OUT" : price}</span>
        </div>
      </li>
    </>
  );
}

export default Pizza;
