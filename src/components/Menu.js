import React from "react";
import pizzaData from "../data/pizzaData.js";
import Pizza from "./Pizza.js";

const Menu = function () {
  const pizza = pizzaData;
  // const pizza = [];
  const numPizza = pizza.length;

  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>

        {/* {numPizza && ( */}

        {/* {numPizza > 0 && (
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizza={{ ...pizza }} key={pizza.name} />
            ))}
          </ul>
        )} */}

        {numPizza ? (
          <React.Fragment>
            <p style={{ whiteSpace: "pre-wrap" }}>
              Authentic Italian cuisine. 6 creative dishes to choose from.{"\n"}
              All from our stone oven. all organic. all delicious.
            </p>
            <ul className="pizzas">
              {pizzaData.map((pizza) => (
                <Pizza pizza={{ ...pizza }} key={pizza.name} />
              ))}
            </ul>
          </React.Fragment>
        ) : (
          <p>We're still working on our menu. Please come back later!!! :)</p>
        )}

        {/*           
          //!   JSX automatically renders array of 
          {[<h1>lala</h1>, <h1>lala</h1>, <h1>lala</h1>, <h1>lala</h1>]} 
           */}
      </main>
    </>
  );
};

export default Menu;
