import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:id" exact component={ProductDetails} />
          <Route>OOPs.. 404! Page Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
