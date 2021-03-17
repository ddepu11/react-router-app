import "./App.css";
import { useFetch } from "./useFetch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Cart from "./Components/Cart";
import Error from "./Components/Error";
import Product from "./Components/Product";

const url = "https://furniture-cart-react-app.herokuapp.com/";

function App() {
  useFetch(url);
  return (
    <div className="container">
      <Router>
        <Navbar />
        <main className="hero">
          <Switch>
            <Route path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/Cart">
              <Cart />
            </Route>

            <Route path="/product/:id" children={<Product />} />

            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
