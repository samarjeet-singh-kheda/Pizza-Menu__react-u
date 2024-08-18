import Order from "./Order";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);

  return (
    <>
      {false} {/** JSX don't render boolean value in DOM  */}
      <footer className="footer">
        {/* {isOpen && (
          <div className="order">
            <p>We're open until 22:00. Come visit us or order online.</p>
            <button className="btn">Order now</button>
          </div>
        )} */}

        {isOpen ? (
          <Order closeHour={closeHour} openHour={openHour} />
        ) : (
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}
            :00.
          </p>
        )}
      </footer>
    </>
  );
}

export default Footer;
