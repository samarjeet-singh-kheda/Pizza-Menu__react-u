/**
//!   MY ATTEMPT



import Pizza from "./Pizza";

export default function App() {
  return (
    <>
      <div className="container">
        <header className="header">
          <h1>Fast React Pizza Co.</h1>
        </header>
        <Pizza />

        <footer className="footer order">
          We're open until 22:00. Come visit us or order online.
          <button className="btn">Order now</button>
        </footer>
      </div>
    </>
  );
}



*/

import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <div className="container">
        {/* <h1
          //!     JSX only accepts objects as inline styles (here property names are converted from "kebab case" to "camel case" & all the values are strings, doesn't matter if we include unit or not)
          //!    In "inline style", the outer braces are to enter JS mode & the inner braces are because JSX only accepts styled objects as Inline CSS
          style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}
        >
          Inline styled heading
        </h1> */}
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App;
