import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ImportFormPage from "./pages/ImportFormPage";
import MyNavbar from "./components/MyNavbar";
import Loginpage from "./pages/Loginpage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (

    <Router>

      <Switch>
        <Route exact path="/">
          <MyNavbar />
          <Loginpage />
        </Route>
        <Route exact path="/import">
          <ImportFormPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
