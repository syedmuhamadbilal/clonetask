import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ImportFormPage from "./pages/ImportFormPage";
import MyNavbar from "./components/MyNavbar";
import Loginpage from "./pages/Loginpage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (

    <Router>
      <MyNavbar />
      <Switch>
        <Route to="/">
          <Loginpage />
        </Route>
        <Route to="/import">
          <ImportFormPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
