import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Layout from "./components/Layout";
import Home from "./pages";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
